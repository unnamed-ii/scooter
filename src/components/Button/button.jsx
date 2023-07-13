import React from 'react';
import './button.scss';

const Button = ({title, color}) => {
    return (
        <button className={"button" + (color === "orange" ? " orange" : "")}>
                {title}
        </button>
    );
};

export default Button;