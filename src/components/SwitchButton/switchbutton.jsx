import React, {useContext} from 'react';
import './switchbutton.scss';
import {SwitchButtonContext, ThemeContext} from "../../Context";

const SwitchButton = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const {isChecked, setIsChecked} = useContext(SwitchButtonContext);

    const handleCheckbox = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        setIsChecked(!isChecked);
    }

    return (
        <label className={`switch ${theme}`}>
            <input type="checkbox"
                   checked={isChecked}
                   onChange={() => handleCheckbox()}
                   className="switch__input"
            />
            <span className="switch__slider"/>
            <span className="switch__white">White</span>
            <span className="switch__black">Black</span>
        </label>
    );
};

export default SwitchButton;