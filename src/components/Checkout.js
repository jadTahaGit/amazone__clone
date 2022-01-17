import React from "react";
import "./Checkout.scss";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="chechout__left">
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal will go there</h2>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
