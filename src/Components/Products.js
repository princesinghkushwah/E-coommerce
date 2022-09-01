import React from "react";
// import Header from "./Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
var currencyFormatter = require("currency-formatter");

const Home = () => {
  const { products } = useSelector((state) => state.productsReducer);
  console.log(products);

  return (
    <div>
      {/* <Header /> */}
      <div className="container">
        <div className="row ">
          {products.map((product) => (
            <div
              className="card product-card mx-5 my-5 "
              style={{ width: "18rem" }}
            >
              <Link to={`/details/${product.id}`}>
                <img
                  src={product.image}
                  className="card-img-top productimg"
                  alt={product.name}
                />
              </Link>

              <div className="card-body">
                <h3 className="card-title title">{product.name}</h3>
                <h5 className="card-title">
                  <span className="actualprice">

                  {currencyFormatter.format(product.price, {
                    code: "USD",
                  })}{" "}
                  </span>
                  <span>{product.discount}%</span>
                </h5>
                <span className="discountprice"> 
                  {currencyFormatter.format(product.discountPrice, {
                    code: "USD",
                  })}
                </span>
                <p className="card-text">{`${product.desc.slice(0, 80)}...`}</p>
                {/* <button href="#" className="btn btn-primary button-33">
                  Add To Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
