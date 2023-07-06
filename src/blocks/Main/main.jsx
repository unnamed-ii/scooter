import React from 'react';
import './main.scss';
import Container from "../../components/Container/container";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const Main = () => {
    return (
        <section className="main">
            <Container>
                <Header/>
            </Container>
            <Container>
                <div className="main__inner">
                    <h1 className="main__inner-title">
                        Стильный электросамокат с мощным аккумулятором
                    </h1>
                    <h3 className="main__inner-subtitle">
                        Улучшенная производительность
                        <br/>
                        для дальних путешествий.
                        <br/>
                        Работает так же просто,
                        <br/>
                        как и выглядит.
                    </h3>
                    <div className="main__inner-toggle">
                        toggle
                    </div>
                </div>
            </Container>
            <Footer/>
        </section>
    );
};

export default Main;