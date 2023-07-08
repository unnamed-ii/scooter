import React from "react";
import Main from "./blocks/Main/main";
import Reviews from "./blocks/Reviews/reviews";
import About from "./blocks/About/about";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import QuestionsAnswers from "./blocks/QuestionsAnswers/qa";
import Design from "./blocks/Design/design";
import Speed from "./blocks/Speed/speed";
import Product from "./blocks/Product/product";

function App() {
    return (
        <>
            <Header />
            <Main />
            <Speed />
            <Design />
            <About />
            <Reviews />
            <QuestionsAnswers />
            <Product />
            <Footer />
        </>
    );
}

export default App;