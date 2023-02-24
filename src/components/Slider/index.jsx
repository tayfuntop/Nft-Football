import React, { useState, useRef } from "react";
import { Carousel } from 'antd';

import bronzeCarousel from "../../assets/carousel/bronze-carousel.png";
import silverCarousel from "../../assets/carousel/silver-carousel.png";
import goldCarousel from "../../assets/carousel/gold-carousel.png";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-rightt.svg";

import "./index.css";
import "../../configs/fonts/Text.css";

const Slider = props => {

    const [dotNumber, setDotNumber] = useState(0);
    const carouselPageRef = useRef();

    const isMobile = window.innerWidth <= 400;
    const [sliderDotTopPosition, setSliderDotTopPosition] = useState(isMobile ? window.innerWidth * 0.175 :
        window.innerWidth * 0.2);
    const [sliderDotLeftPosition, setSliderDotLeftPosition] = useState(isMobile ? window.innerWidth * 0.125 :
        window.innerWidth * 0.195);
    const [sliderDotScale, setSliderDotScale] = useState(isMobile ? 0.5 : 1);

    const updateSliderDotPosition = (e) => {
        let isDesktop = e.currentTarget.innerWidth > 400;
        setSliderDotTopPosition(isDesktop ? e.currentTarget.innerWidth * 0.2 : e.currentTarget.innerWidth * 0.175);
        setSliderDotLeftPosition(isDesktop ? e.currentTarget.innerWidth * 0.195 : e.currentTarget.innerWidth * 0.125);
        isDesktop ? setSliderDotScale(1) : setSliderDotScale(0.5);
    };

    window.addEventListener("resize", updateSliderDotPosition);

    return (
        <div className="carousel" >
            <div className="carousel-pagination"
                style={{ top: `${sliderDotTopPosition}px`, left: `${sliderDotLeftPosition}px`, transform: `scale(${sliderDotScale})` }}>
                <img onClick={() => {
                    carouselPageRef.current.prev();
                    setDotNumber(dotNumber === 0 ? 2 : dotNumber - 1)
                }}
                    className="carousel-direction" src={arrowLeft} alt=""
                />
                <span
                    onClick={() => { carouselPageRef.current.goTo(0); setDotNumber(0) }}
                    className={`carousel-dots ${dotNumber === 0 && "active-dot"}`}>
                </span>
                <span
                    onClick={() => { carouselPageRef.current.goTo(1); setDotNumber(1) }}
                    className={`carousel-dots ${dotNumber === 1 && "active-dot"}`}>
                </span>
                <span
                    onClick={() => { carouselPageRef.current.goTo(2); setDotNumber(2) }}
                    className={`carousel-dots ${dotNumber === 2 && "active-dot"}`}>
                </span>
                <img onClick={() => {
                    carouselPageRef.current.next();
                    setDotNumber(dotNumber === 2 ? 0 : dotNumber + 1)
                }}
                    className="carousel-direction" src={arrowRight} alt=""
                />
            </div>
            <Carousel dots={false} ref={carouselPageRef} >
                <div className="">
                    <img className="w-full" src={bronzeCarousel} alt="" />
                </div>
                <div className="">
                    <img className="w-full" src={silverCarousel} alt="" />
                </div>
                <div className="">
                    <img className="w-full" src={goldCarousel} alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export { Slider };