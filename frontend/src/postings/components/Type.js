import React, { useState } from 'react';
import { NavLink, useParams} from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';
import './Type.css';

const Type = props => {
    const { location } = useParams();
    const [type, setType] = useState('');

    const onValueChange = e => {
        setType(e.target.value);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(type, 'formSubmit');
    }

    

    return (
        <div className="Container">
            <MainHeader >
                <nav className="wanted">
                    <p>India > {location} ></p>
                </nav>
            </MainHeader>
            <main>
            <form onSubmit={formSubmit}>
                <div>
                    <p>please limit each posting to a single area and category, once per 48 hours</p>
                    <h2>what type of posting is this:</h2>
                    <ul>
                        <li><NavLink to={`/${location}/jobs/category1`}>
                                <InputList
                                    element="input"
                                    value="1"
                                    type="radio"
                                    change={onValueChange}>job offered
                                </InputList></NavLink></li>
                            
                        <li><NavLink to={`/${location}/gigs/category2`}>
                        <InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>gig offered</InputList></NavLink></li>
                        <li><NavLink to={`/${location}/resumes/category3`}>
                        <InputList
                            element="input"
                            value="3"
                            type="radio"
                            change={onValueChange}>resume / job wanted</InputList></NavLink></li>
                        <li><NavLink to={`/${location}/housing/category4`}>
                        <InputList
                            element="input"
                            value="4"
                            type="radio"
                            change={onValueChange}
                                    style={{ marginTop: "25px" }}>housing offered</InputList></NavLink></li>
                        <li><NavLink to={`/${location}/housing/category5`}>
                        <InputList
                            element="input"
                            value="5"
                            type="radio"
                            change={onValueChange}>housing wanted</InputList></NavLink></li>
                        <li><NavLink to={`/${location}/for sale/category6`}>
                        <InputList
                            element="input"
                            value="6"
                            type="radio"
                            change={onValueChange}
                                    style={{ marginTop: "25px" }}>for sale by owner</InputList></NavLink></li>
                        <li><NavLink to={`/${location}/for sale/category7`}>
                        <InputList
                            element="input"
                            value="7"
                            type="radio"
                            change={onValueChange}>for sale by dealer</InputList></NavLink></li>
                            <li><NavLink to={`/${location}/wanted by owner/saleform`}>
                        <InputList
                            element="input"
                            value="8"
                            type="radio"
                            change={onValueChange}>wanted by owner</InputList></NavLink></li>
                            <li><NavLink to={`/${location}/wanted by dealer/saleform`}>
                        <InputList
                            element="input"
                            value="9"
                            type="radio"
                            change={onValueChange}>wanted by dealer</InputList></NavLink></li>
                        <li><NavLink to={`/${location}/services/category10`}>
                        <InputList
                            element="input"
                            value="10"
                            type="radio"
                            change={onValueChange}
                                    style={{ marginTop: "25px" }}>service offered</InputList></NavLink></li>
                        <li><NavLink to={`/${location}/community/category11`}>
                        <InputList
                            element="input"
                            value="11"
                            type="radio"
                            change={onValueChange}
                                    style={{ marginTop: "25px" }}>community</InputList></NavLink></li>
                        <li><NavLink to={`/${location}/events/category12`}>
                        <InputList
                            element="input"
                            value="12"
                            type="radio"
                            change={onValueChange}>event / class</InputList></NavLink></li>
                    </ul>
                    <button>Continue</button>
                </div>
                </form>
            </main>
        </div>
    )
};

export default Type;