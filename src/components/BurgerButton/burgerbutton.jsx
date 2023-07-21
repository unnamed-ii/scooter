import React, {useState} from 'react';
import './burgerbutton.scss';

const BurgerButton = () => {
    const [isOpened, setIsOpened] = useState(false);
    const toggleMenu = () => setIsOpened(!isOpened);

    return (
        <div className={"menu" + (isOpened ? " opened" : "")} onClick={toggleMenu}>
            <div className="icon" />
        </div>
    );
};

export default BurgerButton;