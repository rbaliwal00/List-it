import React from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';

const Category1 = props => {
    let history = useHistory();
    const { location, categoryType } = useParams();


    const formSubmit = (event) => {
        event.preventDefault();
        //if (event.target.id == "accounting/finance") {
        //    history.push(`/${location}/${categoryType}/accounting-finance/jobform`);
        //}
        //else if (event.target.value == "admin/office") {
        //    history.push(`/${location}/${categoryType}/admin-office/jobform`);
        //}
    }

    return (
        <div className="Container">
            <MainHeader>
                <nav style={{width: '130px'}}>
                    <p>India > {location} > {categoryType} ></p>
                </nav>
            </MainHeader>
            <main>
                <form onSubmit={formSubmit}>
                <div>
                    <h2>Your current total: 0</h2>
                    <p>Your are posting to "city"</p>
                    <h3>select one or more categories:</h3>
                        <ul>
                            <NavLink to={`/${location} /${categoryType}/accounting-finance/jobform`}>
                        <InputList
                            element="input"
                            value="1"
                            type="radio"
                                id="v1"
                                    name="v1">accounting/finance</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/admin-office/jobform`}>
                        <InputList
                                element="input"
                                id="v2"
                            value="2"
                            type="radio"
                                >admin/office</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/achitect-engineer-cad/jobform`}>
                        <InputList
                                element="input"
                                id="v1"
                            value="3"
                            type="radio"
                                >achitect/engineer/cad</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/art-design-media/jobform`}>
                        <InputList
                                element="input"
                                id="v1"
                            value="3"
                            type="radio"
                                >art/design/media</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/business-mgmt/jobform`}>
                        <InputList
                                element="input"
                                id="v1"
                            value="3"
                            type="radio"
                                >business/mgmt</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/customer-service/jobform`}>
                        <InputList
                                element="input"
                                id="v1"
                            value="3"
                            type="radio"
                                >customer/service</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/education-teaching/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >education/teaching</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/et-cetera/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >et cetera</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/food-beverage-hospitality/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >food/beverage/hospitality</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/general-labour/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >general labour</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/government/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >government</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/healthcare/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >healthcare</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/human-resource/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >human resource</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/legal-paralegal/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >legal/paralegal</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/manufacturing/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >manufacturing</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/marketing-advertising-pr/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >marketing/advertising/pr</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/nonprofit/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >nonprofit</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/real-estate/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >real estate</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/retail-wholesale/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >retail/wholesale</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/sales/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >sales</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/salon-spa-fitness/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >salon/spa/fitness</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/science-biotech/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >science/biotech</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/security/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >security</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/skilled-trades-artisan/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >skilled trades/artisan</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/software-qa-dba-etc/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >software/qa/dba/etc</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/systems-networking/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >systems/networking</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/technical-support/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >technical support</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/transportation/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >transportation</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/tv-film-radio/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >tv/film/radio</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/web-html-info-design/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                                >web/html/info design</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/writing-editing/jobform`}>
                        <InputList
                            element="input"
                                value="3"
                                id="v1"
                            type="radio"
                            >writing/editing</InputList></NavLink>
                    </ul>
                    <h2>Your current total: 0</h2>
                    <p>Your are posting to "city"</p>
                    <button type="submit">Continue</button>
                </div>
                </form>
                </main>
        </div>
    )
};

export default Category1;