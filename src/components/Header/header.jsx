import React from 'react';
import './header.scss';
import logo from '../../images/logo.svg';
import Button from "../Button/button";
import Container from "../Container/container";

const Header = () => {
    return (
        <Container>
            <header className="header">
                <a href="/">
                    <img src={logo} alt="logo" className="header__logo"/>
                </a>
                <div className="header__inner">
                    <ul className="header__inner-menu">
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
            </header>
        </Container>
    );
};

export default Header;