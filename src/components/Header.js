import "./Header.scss";
import AmazonLogo from "./../assets/Amazon_(company)-Logo.wine.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* <Link to="/"></Link> */}
      <img className="header__logo" src={AmazonLogo} />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Prime</span>{" "}
          <span className="header__optionLineTwo">Your Prime</span>
        </div>
        {/* <Link to="/checout">asf</Link> */}
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
