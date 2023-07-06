import React from 'react';
import './reviews.scss';
import Title from "../../components/Title/title";
import Button from "../../components/Button/button";
import {ReviewsData} from "../../constants";
import Container from "../../components/Container/container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewCard = ({name, text}) => {
    return (
        <div className="review-card">
            <div className="review-card__name">
                {name || "Имя скрыто"}
            </div>
            <div className="review-card__text">
                {text}
            </div>
        </div>
    )
}

const Reviews = () => {
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <section className="reviews">
            <Container>
                <div className="reviews__inner">
                    <Title
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