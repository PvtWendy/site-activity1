import React from "react";
import "../../style/News.css";
import newsshoe from "../../images/about-img1.png";
import newsshoe2 from  "../../images/shoes-img2.png";
import newsbg from "../../images/about-img2.png";

export default function News() {
  return (
    <>
      <div className="NewsText">
        <h1>New Collection</h1>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
          exercitation
        </p>
      </div>
      <div className="NewsCollection">
        <p className="NewsNew">New</p>
        <div class="NewsShoe1">
          <img src={newsshoe}></img>
        </div>
        <div className="NewsShoe2">
          <img src={newsbg} ></img>
          <img src={newsshoe2} id="NewShoeImg"></img>
        </div>

        <img></img>
      </div>
    </>
  );
}
