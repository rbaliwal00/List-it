import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';

const Category2Sub1 = props => {
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
                            <NavLink to={`/${location} /${categoryType}/computer-gigs/gigform`} >
                                <InputList
                                    element="input"
                                    value="1"
                                    type="radio"
                                    id="v1"
                                    name="v1"><span style={{ fontSize: '18px' }}
                                    >computer gigs</span><span>(small web design, tech support, etc projects)</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/creative-gigs/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>creative gigs</span> <span> (small design, photography, illustration projects)</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/crew-gigs/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>crew gigs</span> <span> (low budget film/theatre opportunities)</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/domestic-gigs/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>domestic gigs</span> <span> (cleaning, babysitting, homecare, tutoring, personal training, etc)</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/event-gigs/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>event gigs</span> <span> (promotions, catering, wedding photography, etc)</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/labor-gigs/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>labor gigs</span> <span> (includes moving & hauling)</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/talent-gigs/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>talent gigs</span> <span> (acting, modeling, music, dance, etc)</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/writing-gigs/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>wrting gigs</span> <span> (includes editing & translation)</span></InputList>
                            </NavLink>
                        </ul>
                        <button>Continue</button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Category2Sub1;