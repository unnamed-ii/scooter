import React, {useState} from 'react';
import './switchbutton.scss';

const SwitchButton = () => {
    const [isChecked, setIsChecked] = useState(false);
    const setColorForSpan = () => isChecked ? " switched" : "";

    return (
        <label className="switch">
            <input type="checkbox"
                   checked={isChecked}
                   onChange={() => setIsChecked(!isChecked)}
                   className="switch__input"
            />
            <span className="switch__slider"/>
            <span className={"switch__white" + setColorForSpan()}>White</span>
            <span className={"switch__black" + setColorForSpan()}>Black</span>
        </label>
    );
};

export default SwitchButton;