import React, {useState} from 'react';
import './switchbutton.scss';

const SwitchButton = ({theme, setTheme}) => {
    const [isChecked, setIsChecked] = useState(false);
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