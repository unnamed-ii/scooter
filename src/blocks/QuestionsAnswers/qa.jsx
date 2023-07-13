import React from 'react';
import './qa.scss';
import Horizontal from "../../components/Horizontal/horizontal";
import Container from "../../components/Container/container";
import Button from "../../components/Button/button";
import Title from "../../components/Title/title";
import {QuestionsAnswersData} from "../../constants";

const QA = ({question, answer}) => {
    return (
        <div className="qa">
            <h4 className="qa__title">
                {question}
            </h4>
            <Horizontal width={100}/>
            <p className="qa__text">
                {answer}
            </p>
        </div>
    )
}

const FAQ = () => {
    return (
        <section className="qas" id="faq">
            <Container>
                <div className="qas__inner">
                    <div className="qas__inner-block">
                        <Title
                            color={"#FF4C0D"}
                            title={"Часто задаваемые вопросы"}
                        />
                        <div className="qas__inner-block__text">
                            <p>Все ваши часто задаваемые вопросы о электросамокате Mi Scooter Pro 2.</p>
                            <p>Если у вас есть собственный вопрос - задайте его через форму обратной связи.</p>
                        </div>
                        <Button
                            title={"Задать вопрос"}
                        />
                    </div>
                    <ul className="qas__inner-list">
                        {QuestionsAnswersData.map(element => (
                            <QA
                                question={element.question}
                                answer={element.answer}
                            />
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default FAQ;