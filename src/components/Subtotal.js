import React from "react";
import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {/* part of the Homework */}
            <p>
              Subtotal(0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order is a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} //part of the Homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="proceed__btn">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
