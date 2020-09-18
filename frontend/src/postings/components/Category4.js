import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';

const Category4 = props => {
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
                            <NavLink to={`/${location} /${categoryType}/room-shares/housingform`}><InputList
                            element="input"
                            value="1"
                            type="radio"
                            id="v1"
                            name="v1">room $ shares</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/apts-housing/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>apts/housing for rent</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/houseswap/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>houseswap</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/office-commercial/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>office & commercial</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/parking-storage/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>parking & storage</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/real-estate-by-broker/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>real estate - by broker</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/real-estate-by-owner/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>real estate - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/sublets-temporary/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>sublets & temporary</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/vacation-rentals/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>vacation & rentals</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/wanted-apts/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>wanted: apts</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/wanted-real-estate/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>wanted: real estate</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/wanted-room-share/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>wanted: room/share</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/sublets-temp/housingform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>wanted: sublets/temp</InputList></NavLink>
                    </ul>
                    <button>Continue</button>
                </div>
                </form>
                </main>
        </div>
    )
};

export default Category4;