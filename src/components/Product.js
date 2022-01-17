import React from "react";
import "./Product.scss";

const Product = ({ title, image, price, rating }) => {
  return (
    <div className="Product">
      <div className="product___info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
