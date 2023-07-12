import React from 'react';
import './title.scss';

const Title = ({title, subtitle, color, width}) => {
    return (
        <div className={"block-title" + (color === "white" ? " white" : "")} style={{maxWidth: `${width}px`}}>
            <h2>
                {title}
            </h2>
            {subtitle &&
                <div className="block-title__subtitle">
                    subtitle}
                </div>
            }
        </div>
    );
};

export default Title;