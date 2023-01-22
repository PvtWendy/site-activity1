import React from "react";
import Header from "../common/Header";
import "../../style/Banner.css";
import Carousel, { CarouselItem } from "../common/Carousel";
import shoes1 from "../../images/running-shoes.png";

export default function Banner() {
  return (
    <div className="Banner">
      <Header />
      <Carousel>
        <CarouselItem>
          <div className="BannerContent">
            <div className="BannerText">
              <h1>New Running Shoes</h1>
              <h2>Men's Like Plex</h2>
            </div>
            <img src={shoes1} alt="shoes"></img>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="BannerContent">
            <div className="BannerText">
              <h1>New Running Shoes</h1>
              <h2>Men's Like Plex</h2>
            </div>
            <img src={shoes1} alt="shoes"></img>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="BannerContent">
            <div className="BannerText">
              <h1>New Running Shoes</h1>
              <h2>Men's Like Plex</h2>
            </div>
            <img src={shoes1} alt="shoes"></img>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
}
