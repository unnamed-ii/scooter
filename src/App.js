import React, {useState} from "react";
import Main from "./blocks/Main/main";
import Reviews from "./blocks/Reviews/reviews";
import About from "./blocks/About/about";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import QuestionsAnswers from "./blocks/QuestionsAnswers/qa";
import Design from "./blocks/Design/design";
import Speed from "./blocks/Speed/speed";
import Product from "./blocks/Product/product";
import Tabs from "./blocks/Tabs/tabs";
import advantageDefaultImage from "./images/advantages/default.png";
import safetyDefaultImage from "./images/safety/default.png";
import {ScooterAdvantagesData, ScooterSafetyData} from "./constants";
import MobileApp from "./blocks/MobileApp/mobileapp";

function App() {
    const [theme, setTheme] = useState("dark")
    const className = "app-" + theme;

    return (
        <div className={className}>
            <Header/>
            <Main theme={theme} setTheme={setTheme}/>
            <Tabs
                quantity={'3'}
                id={"advantages"}
                titleColor={"white"}
                defaultImage={advantageDefaultImage}
                endpoints={{0:'0', 1:'100', 2:'204'}}
                dataForRendering={ScooterAdvantagesData}
                titleText={"Мощная батарея и экономичный расход заряда позволяют преодолевать расстояния до 45 км"}
            />
            <Speed/>
            <Design/>
            <Tabs
                quantity={'4'}
                id={"safety"}
                titleColor={"orange"}
                defaultImage={safetyDefaultImage}
                dataForRendering={ScooterSafetyData}
                titleText={"Заботится о вашей безопасности"}
                endpoints={{0:'0', 1:'100', 2:'200', 3:'300'}}
            />
            <MobileApp theme={theme}/>
            <About/>
            <Reviews/>
            <QuestionsAnswers/>
            <Product theme={theme} setTheme={setTheme}/>
            <Footer/>
        </div>
    );
}

export default App;