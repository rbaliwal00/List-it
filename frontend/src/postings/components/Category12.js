import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';

const Category12 = props => {
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
                            <NavLink to={`/${location} /gigs/events/gigform`}><InputList
                            element="input"
                            value="1"
                            type="radio"
                            id="v1"
                            name="v1">I'm selling a small number of tickets to an event</InputList></NavLink>
                            <NavLink to={`/${location}/for sale/category6`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>My business is having a sale</InputList></NavLink>
                            <NavLink to={`/${location} /gigs/events/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>I'm offering an event-related service</InputList></NavLink>
                            <NavLink to={`/${location} /gigs/events/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>I'm advertising a garage sale, estate, moving sale, flea market, or other non-corporate sale</InputList></NavLink>
                            <NavLink to={`/${location} /gigs/events/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>I'm advertising a class or training session</InputList></NavLink>
                            <NavLink to={`/${location} /gigs/events/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>I'm advertising an event, other than the above</InputList></NavLink>
                        </ul>
                        <button>Continue</button>
                    </div>
            </form>
        </main>
    </div>
    )
};

export default Category12;