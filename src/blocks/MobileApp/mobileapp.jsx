import React, {useContext} from 'react';
import './mobileapp.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import blackPhone from "../../images/mobile-app/black-phone.png";
import whitePhone from "../../images/mobile-app/white-phone.png";
import appStoreDark from "../../images/mobile-app/app-store-dark.png";
import appStoreLight from "../../images/mobile-app/app-store-light.png";
import playMarketDark from "../../images/mobile-app/play-market-dark.png";
import playMarketLight from "../../images/mobile-app/play-market-light.png";
import {ThemeContext} from "../../Context";

const MobileApp = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <section className="mobile-app">
            <Container>
                <div className="mobile-app__inner">
                    <div className="mobile-app__inner-info">
                        <Title
                            color={"#FF4C0D"}
                            title={"Мобильное приложение Mi Home"}
                        />
                        <p className="text">
                            Подключите самокат к мобильному приложению <br/>
                            Mi Home и используйте его для блокировки <br/>
                            и разблокировки самоката, а так же просмотра <br/>
                            основных данных: пробег, скорость, <br/>
                            уровень заряда аккумулятора.
                        </p>
                        <div className="links">
                            <a href="https://www.apple.com/app-store/" className="links__element">
                                <img src={theme === "dark" ? appStoreLight : appStoreDark} alt="Image"/>
                            </a>
                            <a href="https://play.google.com/store/apps?hl=en_US" className="links__element">
                                <img src={theme === "dark" ? playMarketLight : playMarketDark} alt="Image"/>
                            </a>
                        </div>
                    </div>
                    <img src={theme === "dark" ? blackPhone : whitePhone}
                         alt="Image"
                         className="mobile-app__inner-image"
                    />
                </div>
            </Container>
        </section>
    );
};

export default MobileApp;