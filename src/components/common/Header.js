import "../../style/Banner.css";
import logo from "../../images/logo.png";
import search from "../../images/search_icon.png";
import shop from "../../images/shop_icon.png";

export default function Header(params) {
  return (
    <div className="Header">
      <img src={logo} alt="logo" id="BannerLogo"></img>
      <p>Home</p>
      <p>Collection</p>
      <p>Shoes</p>
      <p>Climbing</p>
      <p>Racing Boots</p>
      <p>Login</p>
      <img src={search} alt="search"></img>
      <img src={shop} alt="shop"></img>
    </div>
  );
}
