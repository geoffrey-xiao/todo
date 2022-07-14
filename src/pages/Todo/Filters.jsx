import React, { useState } from 'react';

const Filters = (props) => {
    const changeCurrent = () => {
        props.setFilter(props.name);
    };
    return (
        <button
            type="button"
            className={`btn toggle-btn state-btn
            ${props.isPressed ? 'active-filter' : null}`}
            aria-pressed={props.isPressed}
            onClick={() => changeCurrent()}
        >
            <span className="visually-hidden">Show </span>
            <span>{props.name}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );
};

export default Filters;