import React from "react";
import "../../style/Banner.css";
import shoes1 from "../../images/running-shoes.png";
export default function CarouselItem(params) {
  return (
    <div className="BannerContent">
      <div className="BannerText">
        <h1>New Running Shoes</h1>
        <h2>Men's Like Plex</h2>
        <div>
          <textarea className="BannerSmallText" disabled readOnly>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </textarea>
        </div>
        <div className="BannerButton">
          <button>Buy Now</button>
          <button>See More</button>
        </div>
      </div>
      <img id="Shoe" src={shoes1} alt="shoes"></img>
    </div>
  );
}
