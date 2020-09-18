import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';

const Category6 = props => {
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
                            <NavLink to={`/${location} /${categoryType}/antiques/saleform`}><InputList
                            element="input"
                            value="1"
                            type="radio"
                            id="v1"
                            name="v1">antiques - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/appliances/saleform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>appliances- by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/arts-crafts/saleform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>arts & crafts - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/atvs-utvs-snowmobiles/saleform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>atvs, utvs, snowmobiles - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/auto-parts/saleform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>auto parts - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/auto-wheels-tires/saleform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>auto wheels & tires - by owners</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/aviation/saleform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>aviation - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/baby-kid-stuff/saleform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>baby & kid stuff - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/barter/saleform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>barter</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/bicycle-parts/saleform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                            change={onValueChange}>bicycle parts - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/bicycles/saleform`}><InputList
                            element="input"
                            value="2"
                            type="radio"
                                change={onValueChange}>bicycles - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/boat-parts/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>boat parts - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/boats/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>boats - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/books-magazines/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>books & magazines - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/business-commercial/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>business/commercial - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/cars-trucks/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>cars & trucks - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/cds-dvds-vhs/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>cds / dvds/ vhs - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/cell-phones/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>cell phones - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/clothing-accessories/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>clothing & accessories - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/collectibles/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>collectibles - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/computer-parts/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>computer parts - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/computers/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>computers - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/electronics/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>electronics - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/farm-garden/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>farm & garden - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/free-stuff/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>free stuff - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/furniture/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>furniture - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/garage-moving/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>garage & moving sales - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/general/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>general for sale - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/health-beauty/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>health and beauty - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/heavy-equipment/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>heavy equipment - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/household/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>household items - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/jewelly/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>jewelly - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/materials/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>materials - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/motorcycle-parts/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>motorcycle parts - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/motorcycles-scooter/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>motorcycles/scooters - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/musical-instruments/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>musical instruments - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/photo-video/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>photo/video - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/rvs/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>rvs - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/sporting-goods/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>sporting goods - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/tickets/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>tickets - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/tools/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>tools - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/toys-games/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>toys & games - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/trailers/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>trailers - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/video-gaming/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>video gaming - by owner</InputList></NavLink>
                            <NavLink to={`/${location} /${categoryType}/wanted/saleform`}><InputList
                                element="input"
                                value="2"
                                type="radio"
                                change={onValueChange}>wanted - by owner</InputList></NavLink> 
                    </ul>
                    <button>Continue</button>
                </div>
                </form>
                </main>
        </div>
    )
};

export default Category6;