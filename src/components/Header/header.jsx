import React, {useState} from 'react';
import './header.scss';
import logo from '../../images/logo.svg';
import Button from "../Button/button";
import Container from "../Container/container";

const Header = () => {
    const [onScroll, setOnScroll] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY > 100) setOnScroll(true)
        if (window.scrollY < 100) setOnScroll(false)
    }
    window.addEventListener('scroll', changeBackgroundColor)

    return (
        <Container>
            <header className={"header" + (onScroll ? " on-scroll" : "")}>
                <div className="header__inner">
                    <a href="/" className="header__logo">
                        <img src={logo} alt="Logo" />
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