import React from "react";
import "../../style/News.css";
import newsshoe from "../../images/about-img1.png";
import newsshoe2 from "../../images/shoes-img2.png";
import runningshoes from "../../images/shoes-img3.png";
import newsshoe4 from "../../images/shoes-img4.png";
import newsshoe5 from "../../images/shoes-img5.png";
import newsshoe6 from "../../images/shoes-img6.png";
import newsshoe7 from "../../images/shoes-img7.png";
import newsshoe8 from "../../images/shoes-img8.png";
import newsshoe9 from "../../images/shoes-img9.png";
import newsbg from "../../images/about-img2.png";

export default function News() {
  return (
    <>
      <div className="News">
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
            <div id="Description">
              <p>Men Sports</p>
              <p>$90</p>
              <div id="Stars1"></div>
            </div>
          </div>
          <div className="NewsShoe2">
            <img src={newsbg}></img>
            <img src={newsshoe2}></img>
            <div id="Description2">
              <p>Men Sports</p>
              <p>$90</p>
              <div id="Stars2"></div>
            </div>
          </div>
          <p id="See">See More</p>
        </div>

        <div className="NewsText">
          <h1>Racing Boot</h1>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
            exercitation
          </p>
        </div>

        <div className="RunningShoes">
          <img src={runningshoes}></img>
          <div className="RunningShoesText">
            <h1>Sale</h1>
            <h2>JOGGING</h2>
            <h1>SHOES</h1>
            <h3>$100</h3>
            <p>See More</p>
          </div>
        </div>

        <div className="NewsText">
          <h1>News Arrivals Products</h1>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
            exercitation
          </p>
        </div>
      </div>
      <div className="NewsPink">
        <div className="NewsContainer">
          <div className="NewsShoes">
            <p>Best Shoes</p>
            <img src={newsshoe4}></img>
            <div id="Stars3"></div>
            <p className="NewsContainerPrice">$60</p>
          </div>
          <div className="NewsShoes">
            <p>Best Shoes</p>
            <img src={newsshoe5}></img>
            <div id="Stars3"></div>
            <p className="NewsContainerPrice">$400</p>
          </div>
          <div className="NewsShoes">
            <p>Best Shoes</p>
            <img src={newsshoe6}></img>
            <div id="Stars3"></div>
            <p className="NewsContainerPrice">$50</p>
          </div>
        </div>
        <div className="NewsContainer">
          <div className="NewsShoes">
            <p>Best Shoes</p>
            <img src={newsshoe7}></img>
            <div id="Stars3"></div>
            <p className="NewsContainerPrice">$70</p>
          </div>
          <div className="NewsShoes">
            <p>Best Shoes</p>
            <img src={newsshoe8}></img>
            <div id="Stars3"></div>
            <p className="NewsContainerPrice">$100</p>
          </div>
          <div className="NewsShoes">
            <p>Best Shoes</p>
            <img src={newsshoe9}></img>
            <div id="Stars3"></div>
            <p className="NewsContainerPrice">$90</p>
          </div>
        </div>
        <h1>Buy Now</h1>
      </div>
    </>
  );
}
