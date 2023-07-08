import React from 'react';
import './product.scss'
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import Button from "../../components/Button/button";
import {ScooterSetData} from "../../constants";

const Product = () => {
    return (
        <section className="product">
            <Container>
                <div className="product__inner">
                    <div className="product__inner-info">
                        <Title
                            title={"Mi Electric Scooter Pro 2"}
                            subtitle={"54 990 ₽"}
                            color={"white"}
                            className="title"
                        />
                        <div>toggle</div>
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