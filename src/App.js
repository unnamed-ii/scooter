import React from "react";
import Main from "./blocks/Main/main";
import Reviews from "./blocks/Reviews/reviews";
import About from "./blocks/About/about";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import QuestionsAnswers from "./blocks/QuestionsAnswers/qa";
import Design from "./blocks/Design/design";

function App() {
    return (
        <>
            <Header />
            <Main />
            <Design />
            <About />
            <Reviews />
            <QuestionsAnswers />
            <Footer />
        </>
    );
}

export default App;