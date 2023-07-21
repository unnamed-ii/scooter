import React from 'react';
import './burgerbutton.scss';

const BurgerButton = ({isMenuOpened, setIsMenuOpened}) => {
    const toggleMenu = () => setIsMenuOpened(!isMenuOpened);

    return (
        <div className={"menu" + (isMenuOpened ? " opened" : "")} onClick={toggleMenu}>
            <div className="icon" />
        </div>
    );
};

export default BurgerButton;