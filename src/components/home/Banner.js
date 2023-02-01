import React from "react";
import Header from "../common/Header";
import "../../style/Banner.css";
import BannerCarousel from "./BannerCarousel";

export default function Banner() {
  return (
    <div className="Banner">
      <Header />
      <BannerCarousel />
    </div>
  );
}
