import React from 'react';
import './header.scss';
import logo from '../../images/logo.svg';
import Button from "../Button/button";
import Container from "../Container/container";

const Header = () => {
    return (
        <Container>
            <header className="header">
                <img src={logo} alt="logo" className="header__logo"/>
                <div className="header__inner">
                    <ul className="header__inner-menu">
                        <li><a href="#about-product">О продукте</a></li>
                        <li><a href="#looks">Внешний вид</a></li>
                        <li><a href="#safety">Безопасность</a></li>
                        <li><a href="#reviews">Отзывы</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                    <Button
                        title={"Купить"}
                    />
                </div>
            </header>
        </Container>
    );
};

export default Header;