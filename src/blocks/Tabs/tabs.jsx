import React, {useState} from 'react';
import './tabs.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import defaultPhoto from "../../images/advantages/default.png";

const Tab = ({idx, activeTab, handleActiveTab, advantage}) => {
    return (
        <div
            className={"advantage" + (idx === activeTab ? " active" : "")}
            onClick={() => handleActiveTab(idx)}>
            <div className="advantage__title">
                {advantage.title}
            </div>
            <div className="advantage__text">
                {advantage.text}
            </div>
        </div>
    )
}

const Tabs = ({quantity, endpoints, dataForRendering}) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleActiveTab = (idx) => setActiveTab(idx);

    const styles = {transform: `translateX(${endpoints[activeTab]}%)`}

    return (
        <section className="advantages">
            <Container>
                <div className="advantages__inner">
                    <div className="progress-horizontal">
                        <span style={styles}/>
                    </div>
                    <Title
                        title={"Мощная батарея и экономичный расход заряда позволяют преодолевать расстояния до 45 км"}
                        color={"white"}
                    />
                    <div className={`advantages__inner-list of__${quantity}`}>
                        {dataForRendering.map((advantage, idx) => (
                            <Tab
                                idx={idx}
                                activeTab={activeTab}
                                handleActiveTab={handleActiveTab}
                                advantage={advantage}
                            />
                        ))}
                    </div>
                    <div className="advantages__inner-photos">
                        <img src={dataForRendering[activeTab].image} alt="Image"
                             className="advantages__inner-photos__active"/>
                        <img src={defaultPhoto} alt="Image" className="advantages__inner-photos__default"/>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Tabs;