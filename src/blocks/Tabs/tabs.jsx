import React, {useState} from 'react';
import './tabs.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";

const Tab = ({idx, activeTab, handleActiveTab, advantage}) => {
    return (
        <div
            className={"tab" + (idx === activeTab ? " active" : "")}
            onClick={() => handleActiveTab(idx)}>
            <div className="tab__title">
                {advantage.title}
            </div>
            <div className="tab__text">
                {advantage.text}
            </div>
        </div>
    )
}

const Tabs = ({sectionName, endpoints, dataForRendering, titleText, titleColor, defaultImage, id}) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleActiveTab = (idx) => setActiveTab(idx);

    const horizontalSpanWidth = sectionName === "advantages" ? 33 : 25;
    const translateXTo = {transform: `translateX(${endpoints[activeTab]}%)`, width: `${horizontalSpanWidth}%`}

    return (
        <section className={`tabs ${sectionName}`} id={id}>
            <Container>
                <div className="tabs__inner">
                    <Title
                        width={838}
                        title={titleText}
                        color={titleColor}
                    />
                    <div className={`tabs__inner-list ${sectionName}`}>
                        <div className={`progress-horizontal ${sectionName}`}>
                            <span style={translateXTo}/>
                        </div>
                        {dataForRendering.map((advantage, idx) => (
                            <Tab
                                idx={idx}
                                activeTab={activeTab}
                                handleActiveTab={handleActiveTab}
                                advantage={advantage}
                            />
                        ))}
                    </div>
                    <div className="tabs__inner-photos">
                        <img src={dataForRendering[activeTab].image}
                             alt="Image"
                             className="tabs__inner-photos__active"
                        />
                        <img src={defaultImage}
                             alt="Image"
                             className="tabs__inner-photos__default"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Tabs;