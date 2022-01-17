import React from "react";
import "./Home.scss";
import Product from "./Product";

const Home = () => {
  return (
    <div className="Home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg"
      />
      <div className="home__row">
        <Product
          title="The lean Startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL254_SR254,254_.jpg"
          rating={5}
        ></Product>{" "}
        <Product
          title="UMYOGO Damen-Laufschuhe, rutschfest, sportlich, Tennis, Walking-Turnschuhe"
          price={48.99}
          image="https://m.media-amazon.com/images/I/81P7Gk1V7tL._AC_UL320_.jpg"
          rating={4}
        ></Product>
      </div>
      <div className="home__row">
        <Product
          title="HUAWEI Watch GT 2 Pro Classic Smartwatch"
          price={179.99}
          image="https://m.media-amazon.com/images/I/61GoNFZA0TL._AC_UY218_.jpg"
          rating={4}
        ></Product>{" "}
        <Product
          title="Rienok Bluetooth Speaker, Portable Wireless Music Box, 30W Extra Bass LED Light Effects Waterproof IP67"
          price={42.99}
          image="https://m.media-amazon.com/images/I/81z+XJmMm4L._AC_UY218_.jpg"
          rating={4}
        ></Product>{" "}
        <Product
          title="Apple 11 Inch iPad Pro with WiFi (2021 Model)"
          price={848.95}
          image="https://m.media-amazon.com/images/I/81raq99wqRS._AC_UY218_.jpg"
          rating={4}
        ></Product>
      </div>
      <div className="home__row">
        <Product
          title="Samsung C34G55TWWR 34-inch Gaming Monitor, Black"
          price={447.15}
          image="https://m.media-amazon.com/images/I/71B89YGbQwL._AC_UY218_.jpg"
          rating={4}
        ></Product>
      </div>
    </div>
  );
};

export default Home;
