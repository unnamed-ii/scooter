import React, {useContext} from 'react';
import './reviews.scss';
import Horizontal from "../../components/Horizontal/horizontal";
import Container from "../../components/Container/container";
import Button from "../../components/Button/button";
import Title from "../../components/Title/title";
import {ReviewsData} from "../../constants";
import {ThemeContext} from "../../Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewCard = ({name, text}) => {
    return (
        <div className="review-card">
            <div className="review-card__name">
                {name || "Имя скрыто"}
            </div>
            <Horizontal width={100}/>
            <div className="review-card__text">
                {text}
            </div>
        </div>
    )
}

const Reviews = () => {
    const {theme} = useContext(ThemeContext);
    const displayWidth = window.innerWidth;
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: displayWidth > 1210 ? 2 : 1,
        slidesToScroll: 1,
        arrows: displayWidth >= 640,
        dots: displayWidth < 640,
    };

    return (
        <section className={`reviews ${theme}`} id="reviews">
            <Container>
                <div className="reviews__inner">
                    <Title
                        color={displayWidth > 640 ? "#FF4C0D" : "#F1F1F1"}
                        title={"Отзывы о Mi Scooter Pro 2"}
                    />
                    <div className="reviews__inner-list">
                        <Slider {...sliderSettings}>
                            {ReviewsData.map(review => (
                                <ReviewCard
                                    name={review.name}
                                    text={review.text}
                                />
                            ))}
                        </Slider>
                    </div>
                    <Button
                        title={"Оставить отзыв"}
                    />
                </div>
            </Container>
        </section>
    );
};

export default Reviews;