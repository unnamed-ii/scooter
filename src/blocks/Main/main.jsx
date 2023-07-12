import React from 'react';
import './main.scss';
import SwitchButton from "../../components/SwitchButton/switchbutton";
import Container from "../../components/Container/container";

const Main = ({theme, setTheme}) => {
    return (
        <section className="main">
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
                    <SwitchButton theme={theme} setTheme={setTheme}/>
                </div>
            </Container>
        </section>
    );
};

export default Main;