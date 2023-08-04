import React from 'react';
import './about.scss';
import Title from "../../components/Title/title";
import {ScooterAboutSliderData} from "../../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSlide = ({image, title, text}) => {
    const titleColor = window.innerWidth <= 1440 ? "#F1F1F1" : "#FF4C0D";

    return (
        <div className="about__slide">
            <div className="about__slide-inner">
                <img src={image} alt="Image" className="about__slide-inner__image"/>
                <div className="about__slide-inner__info">
                    <Title
                        title={title}
                        color={titleColor}
                    />
                    <div className="text">
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}

const About = () => {
    const slideImageId = window.innerWidth >= 1440 ? 0 : window.innerWidth >= 640 ? 1 : 2;
    const sliderSettings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <section className="about" id="about-product">
            <div className="about__slider-wrapper">
                <Slider {...sliderSettings}>
                    {ScooterAboutSliderData.map(slide => (
                        <AboutSlide
                            text={slide.text}
                            title={slide.title}
                            image={slide.image[slideImageId]}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default About;