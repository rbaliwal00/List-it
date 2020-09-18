import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Map from '../../shared/UIElements/Map';

import MainHeader from '../../shared/Components/MainHeader';
import FormInput from '../../shared/UIElements/FormInput';
import './GeoVerify.css';

const GeoVerify = props => {
    const { location, categorytype, form } = useParams();
    let history = useHistory();

    const handleclick = () => {
        history.push(`/${location}/${categorytype}/${form}/preview`);
    };

    return (
        <React.Fragment>
        <MainHeader>
                <nav classname="ver">
                    <p>india > {location} > {categorytype} > {form}</p>
                </nav>
            </MainHeader>
            <main>
            <div classname="geoverify">
                <div classname="center container">
                    <div>
                            <FormInput
                                id="street"
                                element="input"
                                type="text"
                                label="street"
                                size="20"
                                color="green"
                                bordercolor="green"
                                //onInput={inputhandler}
                        ></FormInput>
                    </div>
                    <div>
                            <FormInput
                                id="area"
                            element="input"
                            type="text"
                            label="area"
                            size="20"
                            color="green"
                            bordercolor="green"
                            //onInput={inputhandler}
                        ></FormInput>
                    </div>
                    <div>
                            <FormInput
                                id="city"
                                element="input"
                                type="text"
                                label="city"
                                size="20"
                                color="green"
                                bordercolor="green"
                               // onInput={inputhandler}
                        ></FormInput>
                    </div>
                    <div>
                            <FormInput
                                id="pincode"
                                element="input"
                                type="text"
                                label="pin code"
                                size="20"
                                color="green"
                                bordercolor="green"
                                //onInput={inputhandler}
                        ></FormInput>
                    </div>
                    <div>
                        <button>find</button>
                    </div>
                </div>
                <Map center={{ lat: 30.923, lng: 75.921621 }} zoom={16} />
                    <button onclick={handleclick} classname="center lower-button ">continue</button>
                </div>
            </main>
            </React.Fragment>
        )
};

export default GeoVerify;