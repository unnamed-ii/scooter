import React from "react";
import Main from "./blocks/Main/main";
import Reviews from "./blocks/Reviews/reviews";
import About from "./blocks/About/about";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

function App() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Reviews />
            <Footer />
        </>
    );
}

export default App;