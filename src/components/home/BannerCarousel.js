import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import CarouselItem from "../common/CarouselItem";

export default function BannerCarousel() {
    return(
        <Carousel>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
        </Carousel>
    )
}