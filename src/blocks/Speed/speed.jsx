import React from 'react';
import './speed.scss'
import Container from "../../components/Container/container";
import {ReactComponent as LogoIcon} from "../../images/logo.svg";
import speedBg from "../../images/speed-bg.png";

const Speed = () => {
    return (
        <section className="speed">
            <Container>
                <div className="speed__inner">
                    <img src={speedBg} alt="Image" className="speed__inner-bg"/>
                    <div className="speed__inner-content">
                        <LogoIcon className="icon"/>
                        <div className="speed__inner-content__title">
                            Высокая скорость <br/>передвижения
                        </div>
                        <div className="speed__inner-content__text">
                            Двигатель мощностью до 600 Вт позволяет <br/> развивать скорость до 25 км/ч.
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Speed;