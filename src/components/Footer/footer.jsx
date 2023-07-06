import React from 'react';
import './footer.scss';
import Container from "../Container/container";

const Footer = () => {
    return (
        <Container>
            <footer className="footer">
                <div className="footer__privacy">
                    <div className="footer__privacy-top">
                        © 2010 - 2021 Xiaomi.
                    </div>
                    <div className="footer__privacy-bottom">
                        Все права защищены.
                    </div>
                </div>
                <div className="footer__info">
                    <div className="footer__info-phone">
                        8 800 775 66 15
                    </div>
                    <div className="footer__info-schedule">
                        Часы работы с 9:00 до 20:00 МСК, Пн. – Пт.
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;