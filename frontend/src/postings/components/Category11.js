import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';

const Category11 = props => {
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
                            <NavLink to={`/${location}/${categoryType}/activity-partners/communityform`}><InputList
                            element="input"
                            value="1"
                            type="radio"
                            id="v1"
                            name="v1">activity partners</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/artists/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>artists</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/childcare/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>chilcare</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/general-community/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>general community</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/groups/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>groups</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/local-news/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>local news and views</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/lost-found/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>lost & found</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/missed-connections/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>missed connections</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/musicians/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>musicians</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/pets/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>pets</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/politics/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>politics</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/rants-raves/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>rants & raves</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/rideshares/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>rideshares</InputList></NavLink>
                            <NavLink to={`/${location}/${categoryType}/volunteers/communityform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>volunteers</InputList></NavLink>
                        </ul>
                    <button>Continue</button>
                </div>
                </form>
                </main>
        </div>
    )
};

export default Category11;