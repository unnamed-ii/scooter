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
import SwitchButton from "./components/SwitchButton/switchbutton";

function App() {
    const [theme, setTheme] = useState("dark")
    const className = "app-" + theme;

    return (
        <div className={className}>
            <Header/>
            <Main theme={theme} setTheme={setTheme}/>
            <Speed/>
            <Design/>
            <About/>
            <Reviews/>
            <QuestionsAnswers/>
            <Product theme={theme} setTheme={setTheme}/>
            <Footer/>
        </div>
    );
}

export default App;