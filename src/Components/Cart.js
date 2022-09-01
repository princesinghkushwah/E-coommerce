import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
var currencyFormatter = require("currency-formatter");

const Cart = () => {
  const { products, totalPrice, totalQuantities } = useSelector(
    (state) => state.cartReducer
  );
  console.log(products);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart my-4">
        <div className="container">
          <h3>Your cart</h3>
          {products.length > 0 ? (
            <>
              <div className="row">
                <div className="col-9">
                  <table className="table my-2">
                    <thead className="i ">
                      <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Inc/Dec</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    {products.map((product) => (
                      <tbody>
                        <tr>
                          <th scope="row">
                            <img src={product.image} width="100px" alt="" />
                          </th>
                          <td className="w">{product.name}</td>
                          <td>
                            <span className="discountprice">
                              {currencyFormatter.format(product.discountPrice, {
                                code: "USD",
                              })}
                            </span>
                          </td>
                          <td>
                            <div className=" my-4">
                              <span
                                className="inc px-3"
                                onClick={() =>
                                  dispatch({ type: "DEC", payload: product.id })
                                }
                              >
                                -
                              </span>
                              <span className="quantity px-3">
                                {product.quantity}
                              </span>
                              <span
                                className="dec px-3"
                                onClick={() =>
                                  dispatch({ type: "INC", payload: product.id })
                                }
                              >
                                +
                              </span>
                            </div>
                          </td>
                          <td>
                            <span className="discountprice">
                              {currencyFormatter.format(
                                product.discountPrice * product.quantity,
                                {
                                  code: "USD",
                                }
                              )}
                            </span>
                          </td>
                          <td>
                            <MdDelete
                              className="del"
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE",
                                  payload: product.id,
                                })
                              }
                            />
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
                <div className="col-3 sum">
                  <div className="sumary">Summary</div>
                  <div className="summary_detail">
                    <div className="row">
                      <div className="col-6">Total Item:</div>
                      <div className="col-6">{totalQuantities}</div>
                    </div>
                    <div className="row">
                      <div className="col-6">Total Price:</div>
                      <div className="col-6">
                        <span className="discountprice">
                          {currencyFormatter.format(totalPrice, {
                            code: "USD",
                          })}
                        </span>
                      </div>
                      <div className="col-6">
                        
                      <button className="checkout">CheckOut</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            "Your cart is empty"
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
