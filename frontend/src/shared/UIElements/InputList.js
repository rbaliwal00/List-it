import React from 'react';

import './InputList.css';


const InputList = props => {

    const element =
        props.element === 'input' ? (
            <label htmlFor={props.id}>
                <input
                    id={props.id}
                    type={props.type}
                    />{props.children}
            </label>
        ) : (
                <textarea
                    id={props.id}
                    rows={props.rows || 3}
                />
            );

    return (
        <div className="input-list">
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    );
};

export default InputList;
