import React, { useReducer, useEffect } from 'react';

import { validate } from '../util/validators';
import './FormInput.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'CHANGED':
            return {
                ...state,
                value: action.val
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
};

const FormInput = props => {
    const [inputState, dispatch] = useReducer(inputReducer,
        {
            value: props.initialValue || '',
            isValid: props.initialValid || false,
            isTouched: false
        });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        if (props.type === "checkbox") {
            if (event.target.checked === true) {
                console.log({ [event.target.id]: event.target.checked });
            }
            else {
                console.log({ [event.target.id]: event.target.value });
            }
            dispatch({ type: 'CHANGED', val: event.target.checked });
        }
        dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        })
    };

    const element = props.element === "input" ?
        <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            size={props.size}
            style={{ borderColor: props.bordercolor}}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value} /> :
        <textarea
            id={props.id}
            rows={props.rows || 3}
            cols={props.size}
            style={{ borderColor: props.bordercolor }}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value} />
    let res;
    if (props.type === "checkbox" || props.type === "radio") {
        res = (<div className={`form-control checkbox ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}
            style={props.style} >
            {element}
            <label >{props.label}</label>
        </div>)
    } else {
        res = (<div className={`form-control form-group ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`} style={{ margin: '10px' }} >
            <label style={{ color: props.color}
            }> {props.label}</label >
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>)
    }

    return (
    <div>
            {res}
    </div>
    );
};

export default FormInput;
