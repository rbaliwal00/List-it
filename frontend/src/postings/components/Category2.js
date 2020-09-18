import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';

const Category2 = props => {
    const [type, setType] = useState('');
    const { location, categoryType } = useParams();

    const onValueChange = e => {
        setType(e.target.value);

    }

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(type, 'formSubmit');
    }

    return (
        <div className="Container">
            <MainHeader>
                <nav>
                    <p>India > {location} > {categoryType} ></p>
                </nav>
            </MainHeader>
            <main>
            <form onSubmit={formSubmit}>
                <div>
                    <h4>which of these applies</h4>
                        <ul>
                            <NavLink to={`/${location} /${categoryType}/HireSomeone/`}>
                                <InputList
                                    element="input"
                                    value="1"
                                    type="radio"
                                    id="v1"
                                    name="v1">I want to hire someone</InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/ServiceToOffer/`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}>I have a service to offer</InputList>
                            </NavLink>
                    </ul>
                    <button>Continue</button>
                </div>
                </form>
                </main>
        </div>
    )
};

export default Category2;