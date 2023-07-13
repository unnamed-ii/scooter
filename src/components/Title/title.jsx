import React from 'react';
import './title.scss';

const Title = ({title, subtitle, color, width}) => {
    const styles = {maxWidth: `${width}px`, color: `${color}`}

    return (
        <div className="block-title" style={styles}>
            <h2>
                {title}
            </h2>
            {subtitle &&
                <div className="block-title__subtitle">
                    {subtitle}
                </div>
            }
        </div>
    );
};

export default Title;