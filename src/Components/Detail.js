import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
var currencyFormatter = require("currency-formatter");

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productsReducer);
  console.log(product);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-5 ">
            <div className="card-header"></div>
            <img
              src={product.image}
              className="product_detail_image ml-5"
              alt=""
            />
          </div>
          <div className="col-md-7 product_detail_text">
            <div className="card-body">
              <h4 className="my-3">{product.name}</h4>
              <h5 className="card-title">
                <span className="actualprice">
                  {currencyFormatter.format(product.price, {
                    code: "USD",
                  })}
                </span>
              </h5>
              <span className="discountprice">
                {currencyFormatter.format(product.discountPrice, {
                  code: "USD",
                })}
              </span>
              <div className=" my-4">
                <span className="inc px-3" onClick={decQuantity}>
                  -
                </span>
                <span className="quantity px-3">{quantity}</span>
                <span
                  className="dec px-3"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </span>
              </div>
              <button
                className="btn-add w-50 py-2 my-4"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { product, quantity },
                  })
                }
              >
                Add To Cart
              </button>
              <p className="card-text">{product.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
