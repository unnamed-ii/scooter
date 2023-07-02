import React from 'react';
import './main.scss';
import Container from "../../components/Container/container";
import Header from "../../components/Header/header";

const Main = () => {
    return (
        <section className="main">
            <Container>
                <Header />
                <div className="main__inner">

                </div>
            </Container>
        </section>
    );
};

export default Main;