import React from "react";
import "../../style/Banner.css"

export const CarouselItem = ({children, width}) =>{
    return (
        <div className="CarouselItem" style={{width: width}}>
            {children}
        </div>
    )
}

const Carousel = ({ children }) => {
    return (
        <div className="BannerCarousel">
                <div className="CarouselInner" style={{transform: "translateX(-000%)"}}>
                    {React.Children.map(children, (child,index) => {
                        return React.cloneElement(child, {width: "100%"})
                    })}
                </div>
        </div>
    )
}

export default Carousel