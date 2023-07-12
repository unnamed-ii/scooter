import React, {useContext} from 'react';
import './mobileapp.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import blackPhone from "../../images/mobile-app/black-phone.png";
import whitePhone from "../../images/mobile-app/white-phone.png";
import appStore from "../../images/mobile-app/app-store.png";
import playMarket from "../../images/mobile-app/play-market.png";
import {ThemeContext} from "../../Context";

const MobileApp = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <section className="mobile-app">
            <Container>
                <div className="mobile-app__inner">
                    <div className="mobile-app__inner-info">
                        <Title
                            color={"orange"}
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
                                <img src={appStore} alt="Image"/>
                            </a>
                            <a href="https://play.google.com/store/apps?hl=en_US" className="links__element">
                                <img src={playMarket} alt="Image"/>
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