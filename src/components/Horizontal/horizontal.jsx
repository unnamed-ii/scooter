import React from 'react';
import './horizontal.scss';

const Horizontal = ({width}) => {
    return (
        <div
            className="horizontal"
            style={{width: `${width}px`}}
        />
    );
};

export default Horizontal;