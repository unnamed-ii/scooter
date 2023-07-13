import React, {useContext} from 'react';
import './product.scss'
import SwitchButton from "../../components/SwitchButton/switchbutton";
import Container from "../../components/Container/container";
import Button from "../../components/Button/button";
import Title from "../../components/Title/title";
import {ScooterSetData} from "../../constants";
import {ThemeContext} from "../../Context";

const Product = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <section className={`product ${theme}`} id="product">
            <Container>
                <div className="product__inner">
                    <div className="product__inner-info">
                        <Title
                            color={theme === "dark" ? "#F1F1F1" : "#151515"}
                            title={"Mi Electric Scooter Pro 2"}
                            subtitle={"54 990 ₽"}
                            className="title"
                        />
                        <SwitchButton />
                        <Button
                            title={"Купить"}
                            color={"orange"}
                        />
                    </div>
                    <div className="product__inner-set">
                        <div className="product__inner-set__title">
                            Комплект поставки
                        </div>
                        <ul className="product__inner-set__list">
                            {ScooterSetData.map(element => (
                                <li>{element}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Product;