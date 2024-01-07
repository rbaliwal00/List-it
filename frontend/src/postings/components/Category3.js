import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';

const Category3 = props => {
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
                    <h2>which of these applies?</h2>
                    <ul>
                            <NavLink to={`/${location} /${categoryType}/resumes/gigform`}><InputList
                            element="input"
                            value="1"
                            type="radio"
                            id="v1"
                            name="v1">I'm an individual seeking employment</InputList></NavLink>
                            <NavLink to={`/${location}/services/category10`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>I'm offering or advertising a service</InputList></NavLink>
                            <NavLink to={`/${location}/jobs/category1`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>I'm offering a job</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/resumes/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>I'm offering chilcare</InputList></NavLink>
                    </ul>
                    <button>Continue</button>
                </div>
                </form>
                </main>
        </div>
    )
};

export default Category3;