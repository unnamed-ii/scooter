import React, {useContext} from 'react';
import './design.scss'
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import {ScooterDesignData} from "../../constants";
import {ThemeContext} from "../../Context";

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
    const {theme} = useContext(ThemeContext);

    return (
        <section className={`design ${theme}`} id="design">
            <Container>
                <div className="design__inner">
                    <Title
                        width={755}
                        color={theme === "dark" ? "#FF4C0D" : "#151515"}
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