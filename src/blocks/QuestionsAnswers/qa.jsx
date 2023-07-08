import React from 'react';
import './qa.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import Button from "../../components/Button/button";
import Horizontal from "../../components/Horizontal/horizontal";
import {QuestionsAnswersData} from "../../constants";


const QuestionAnswer = ({question, answer}) => {

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

const QuestionsAnswers = () => {
    return (
        <section className="qas">
            <Container>
                <div className="qas__inner">
                    <div className="qas__inner-block">
                        <Title
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
                            <QuestionAnswer
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

export default QuestionsAnswers;