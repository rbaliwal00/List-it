import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import InputList from '../../shared/UIElements/InputList';
import MainHeader from '../../shared/Components/MainHeader';

const Category2Sub2 = props => {
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
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`} >
                                <InputList
                                    element="input"
                                    value="1"
                                    type="radio"
                                    id="v1"
                                    name="v1"><span style={{ fontSize: '18px' }}
                                    >automotive services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>beauty services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>cell phone/ mobile services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>computer services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>cretive services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>event services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>farm & garden services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>financial services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>household services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>labor/ hauling/ moving</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>legal services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>lessons & tutoring</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>marine services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>pet services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>real estate services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>skilled trade services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>small biz adds</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>travel/vacation services</span></InputList>
                            </NavLink>
                            <NavLink to={`/${location} /${categoryType}/servicetoOffer/gigform`}>
                                <InputList
                                    element="input"
                                    value="2"
                                    type="radio"
                                    change={onValueChange}><span style={{ fontSize: '18px' }}>wrting / editing / translation</span></InputList>
                            </NavLink>
                        </ul>
                        <button>Continue</button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Category2Sub2;