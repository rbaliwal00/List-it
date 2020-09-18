import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';
import './SubArea.css';

const SubArea = props => {
    const [city, setCity] = useState('Delhi');

    const onClick = e => {
        return setCity(e.currentTarget.value);
    }

    const onValueChange = e => {
        
    }

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(city, 'formSubmit');
    }

    
    return (
        <div className="Container">
            <MainHeader >
                <nav>
                    <p>India ></p>
                </nav>
            </MainHeader>
            <main>
            <form onSubmit={formSubmit}>
                <div>
                    <h3 >choose the location that fits best:</h3>
                        <NavLink to={`/Ludhiana/type`}>
                            <InputList
                            element="input"
                            value="1"
                            type="radio"
                            change={onClick}
                            >Ludhiana</InputList></NavLink>
                        <NavLink to="/Chandigarh/type">
                        <InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}
                            city={city}>Chandigarh</InputList></NavLink>
                        <NavLink to="/Delhi/type">
                        <InputList
                            element="input"
                            value="3"
                            type="radio"
                            change={onValueChange}
                                city={city}>Delhi</InputList></NavLink>
                        <NavLink to="/Mumbai/type">
                        <InputList
                            element="input"
                            value="4"
                            type="radio"
                            change={onValueChange}
                                city={city}>Mumbai</InputList></NavLink>
                        <NavLink to="/Chennai/type">
                        <InputList
                            element="input"
                            value="5"
                            type="radio"
                            change={onValueChange}
                            city="Chennai">Chennai</InputList></NavLink>
                    <button className="center">Continue</button>
                </div>
                </form>
            </main>
        </div>
        )
};

export default SubArea;