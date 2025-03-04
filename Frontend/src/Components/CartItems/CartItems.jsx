import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

export const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="caritems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <div key={e.id}>
                    <div className="classitems-format caritems-format-main">
                      <img src={e.image} alt="" className="carticon-product-icon" />
                      <p>{e.name}</p>
                      <p>${e.new_price}</p>
                      <button className="cartitems-quantity">
                        {cartItems[e.id]}
                      </button>
                      <p>${e.new_price * cartItems[e.id]}</p>
                      <img
                        className="carttems-remove-icon"
                        src={remove_icon}
                        onClick={() => {
                          removeFromCart(e.id);
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                );
              }
              return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promocode enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder="promo code" /><button>Submit</button>
                    </div>
                </div>
            </div>
    </div>
  );
};
