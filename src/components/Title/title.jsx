import React from 'react';
import './title.scss';

const Title = ({title, subtitle, color}) => {
    return (
        <div className={"block-title" + (color === "white" ? " white" : "")}>
            <h2>{title}</h2>
            {subtitle &&
                <div>{subtitle}</div>
            }
        </div>
    );
};

export default Title;