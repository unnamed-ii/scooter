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
                <h3>
                    {subtitle}
                </h3>
            }
        </div>
    );
};

export default Title;