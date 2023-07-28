import React from 'react';
import './about.scss';
import Title from "../../components/Title/title";
import {ScooterAboutSliderData} from "../../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSlide = ({image, title, text}) => {
    return (
        <div className="about__slide">
            <div className="about__slide-inner">
                <img src={image} alt="Image" className="about__slide-inner__image"/>
                <div className="about__slide-inner__info">
                    <Title
                        title={title}
                        color={"#FF4C0D"}
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
    const slideImageId = window.innerWidth > 640 ? 0 : 1;
    const sliderSettings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="about" id="about-product">
            <Slider {...sliderSettings}>
                {ScooterAboutSliderData.map(slide => (
                    <AboutSlide
                        text={slide.text}
                        title={slide.title}
                        image={slide.image[slideImageId]}
                    />
                ))}
            </Slider>
        </section>
    );
};

export default About;