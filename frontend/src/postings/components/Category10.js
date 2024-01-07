import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';

const Category10 = props => {
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
                    <h2>please choose a category:</h2>
                        <ul>
                            <NavLink to={`/${location} /${categoryType}/automotive-service/gigform`}><InputList
                            element="input"
                            value="1"
                            type="radio"
                            id="v1"
                            name="v1">automotive service</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/beauty-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>beauty services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/cell-phone/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>cell phone</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/computer-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                                change={onValueChange}>computer services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/creative-services/gigform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>creative services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/cycle-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>cycle services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/event-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>event services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/farm-garden-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>farm & garden services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/financial-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>financial services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/household-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>household services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/labor-hauling-moving/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>labor/ hauling/ moving</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/legal-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>legal services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/lessons-tutoring/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>lessons & tutoring</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/marine-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>marine services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/pet-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>pet services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/real-estate-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>real estate services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/skilled-trade-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>skilled trade services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/small-biz-ads/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>small biz ads</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/travel-vacation-services/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>travel/vacation services</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/writing-editing-translation/gigform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>writing/editing/translation</InputList></NavLink>
                    </ul>
                    <button>Continue</button>
                </div>
                </form>
                </main>
        </div>
    )
};

export default Category10;