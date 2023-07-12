import React from 'react';
import './design.scss'
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import {ScooterDesignData} from "../../constants";

const DesignFeatureCard = ({bgImage, title, text}) => {
    return (
        <div className="feature-card">
            <img src={bgImage} alt="Image" className="feature-card__image"/>
            <div className="feature-card__info">
                <h4 className="feature-card__info-title">
                    {title}
                </h4>
                <div className="feature-card__info-text">
                    {text}
                </div>
            </div>
        </div>
    )
}

const Design = () => {
    return (
        <section className="design" id="design">
            <Container>
                <div className="design__inner">
                    <Title
                        title={"Лаконичный современный дизайн, в котором нет ничего лишнего"}
                    />
                    <div className="design__inner-features">
                        {ScooterDesignData.map(feature => (
                            <DesignFeatureCard
                                bgImage={feature.image}
                                title={feature.title}
                                text={feature.text}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Design;