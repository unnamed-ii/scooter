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
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <section className={`reviews ${theme}`} id="reviews">
            <Container>
                <div className="reviews__inner">
                    <Title
                        color={"#FF4C0D"}
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