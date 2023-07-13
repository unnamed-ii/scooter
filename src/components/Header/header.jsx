import React, {useContext, useState} from 'react';
import './header.scss';
import Container from "../Container/container";
import Button from "../Button/button";
import logoWhite from '../../images/logo.svg';
import logoOrange from '../../images/orange-logo.svg';
import {ThemeContext} from "../../Context";

const Header = () => {
    const {theme} = useContext(ThemeContext);
    const [onScroll, setOnScroll] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY > 100) setOnScroll(true)
        if (window.scrollY < 100) setOnScroll(false)
    }
    window.addEventListener('scroll', changeBackgroundColor)

    return (
        <Container>
            <header className={`header ${theme}` + (onScroll ? " on-scroll" : "")}>
                <div className="header__inner">
                    <a href="#main" className="header__logo">
                        <img src={theme === "dark" ? logoWhite : logoOrange} alt="Logo" />
                    </a>
                    <div className="header__nav">
                        <ul className="header__nav-menu">
                            <li><a href="#advantages">О продукте</a></li>
                            <li><a href="#design">Внешний вид</a></li>
                            <li><a href="#safety">Безопасность</a></li>
                            <li><a href="#reviews">Отзывы</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                        <a href="#product">
                            <Button
                                title={"Купить"}
                            />
                        </a>
                    </div>
                </div>
            </header>
        </Container>
    );
};

export default Header;