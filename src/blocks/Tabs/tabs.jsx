import React, {useState} from 'react';
import './tabs.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";

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

const Tabs = ({quantity, endpoints, dataForRendering, titleText, titleColor, defaultImage, id}) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleActiveTab = (idx) => setActiveTab(idx);
    let tabsWidth = Math.floor(100 / quantity);
    const styles = {transform: `translateX(${endpoints[activeTab]}%)`, width: `${tabsWidth}%`}

    return (
        <section className="advantages" id={id}>
            <Container>
                <div className="advantages__inner">
                    <Title
                        title={titleText}
                        color={titleColor}
                    />
                    <div className={`advantages__inner-list of__${quantity}`}>
                        <div className={`progress-horizontal of__${quantity}`}>
                            <span style={styles}/>
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
                    <div className="advantages__inner-photos">
                        <img src={dataForRendering[activeTab].image} alt="Image"
                             className="advantages__inner-photos__active"/>
                        <img src={defaultImage} alt="Image" className="advantages__inner-photos__default"/>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Tabs;