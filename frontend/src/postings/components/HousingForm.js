import React, { useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MainHeader from '../../shared/Components/MainHeader';
import FormInput from '../../shared/UIElements/FormInput';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import 'semantic-ui-css/semantic.min.css'
import { useForm } from '../hooks/form-hook';
import { useHttpClient } from '../hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ImageUpload from '../../shared/UIElements/ImageUpload';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import { Dropdown } from 'semantic-ui-react';

import './JobForm.css';

const HousingForm = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [privateroom, setPrivateRoom] = useState('-');
    const [privatebath, setPrivateBath] = useState('-');
    const [housingtype, setHousingType] = useState('-');
    const [laundry, setLaundry] = useState('-');
    const [parking, setParking] = useState('-');

    const privateRoom = [
        {
            key: '-',
            text: '-',
            value: '-'
        },
        {
            key: 'not-private-room',
            text: 'room not private',
            value: 'room not private'
        },
        {
            key: 'private-room',
            text: 'private room',
            value: 'private room',
        },
    ]

    const privateBath = [
        {
            key: '-',
            text: '-',
            value: '-'
        },
        {
            key: 'not-private-bath',
            text: 'no private bath',
            value: 'no private bath'
        },
        {
            key: 'private-bath',
            text: 'private bath',
            value: 'private bath',
        },
    ]

    const housingType = [
        {
            key: '-',
            text: '-',
            value: '-'
        },
        {
            key: 'apartment',
            text: 'apartment',
            value: 'apartment'
        },
        {
            key: 'condo',
            text: 'condo',
            value: 'condo',
        },
        {
            key: 'cottage/cabin',
            text: 'cottage/cabin',
            value: 'cottage/cabin',
        },
        {
            key: 'duplex',
            text: 'duplex',
            value: 'duplex',
        },
        {
            key: 'flat',
            text: 'flat',
            value: 'flat',
        },
        {
            key: 'house',
            text: 'house',
            value: 'house',
        },
        {
            key: 'in-law',
            text: 'in-law',
            value: 'in-law',
        },
        {
            key: 'loft',
            text: 'loft',
            value: 'loft',
        },
        {
            key: 'townhouse',
            text: 'townhouse',
            value: 'townhouse',
        },
        {
            key: 'manufactured',
            text: 'manufactured',
            value: 'manufactured',
        },
        {
            key: 'assisted living',
            text: 'assisted living',
            value: 'assisted living',
        },
        {
            key: 'land',
            text: 'land',
            value: 'land',
        },
    ]

    const laundryopt = [
        {
            key: '-',
            text: '-',
            value: '-'
        },
        {
            key: 'w/d unit',
            text: 'w/d unit',
            value: 'w/d unit'
        },
        {
            key: 'w/d hookups',
            text: 'w/d hookups',
            value: 'w/d hookups',
        },
        {
            key: 'laundry in bldg',
            text: 'laundry in bldg',
            value: 'laundry in bldg',
        },
        {
            key: 'laundry on site',
            text: 'laundry on site',
            value: 'laundry on site',
        },
        {
            key: 'no laundry on site',
            text: 'no laundry on site',
            value: 'no laundry on site',
        },
    ]

    const parkingopt = [
        {
            key: '-',
            text: '-',
            value: '-'
        },
        {
            key: 'carport',
            text: 'carport',
            value: 'carport'
        },
        {
            key: 'attached garage',
            text: 'attached garage',
            value: 'attached garage',
        },
        {
            key: 'detached garage',
            text: 'detached garage',
            value: 'detached garage',
        },
        {
            key: 'off-street parking',
            text: 'off-street parking',
            value: 'off-street parking',
        },
        {
            key: 'street parking',
            text: 'street parking',
            value: 'street parking',
        },
        {
            key: 'valet parking',
            text: 'valet parking',
            value: 'valet parking',
        },
        {
            key: 'no parking',
            text: 'no parking',
            value: 'no parking',
        }
    ]


    const [formState, inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            city: {
                value: '',
                isValid: false
            },
            pincode: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            formemail: {
                value: '',
                isValid: false
            },
            phone: {
                value: '',
                isValid: false
            },
            contactname: {
                value: '',
                isValid: false
            },
            extension: {
                value: '',
                isValid: false
            },
            street: {
                value: '',
                isValid: false
            },
            crossstreet: {
                value: '',
                isValid: false
            },
            cityy: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: true
            },
            rent: {
                value: '',
                isValid: true
            },
            sqft: {
                value: '',
                isValid: true
            },
            availableon: {
                value: '',
                isValid: true
            }
        }, false);

    let history = useHistory();
    const { location, categoryType, form } = useParams();

    const postSubmitHandler = async event => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', formState.inputs.title.value);
            formData.append('city', formState.inputs.city.value);
            formData.append('pincode', formState.inputs.pincode.value);
            formData.append('description', formState.inputs.description.value);
            formData.append('formemail', formState.inputs.formemail.value);
            formData.append('phone', formState.inputs.phone.value);
            formData.append('extension', formState.inputs.extension.value);
            formData.append('contactname', formState.inputs.contactname.value);
            formData.append('street', formState.inputs.street.value);
            formData.append('crossstreet', formState.inputs.crossstreet.value);
            formData.append('cityy', formState.inputs.cityy.value);
            formData.append('rent', formState.inputs.rent.value);
            formData.append('sqft', formState.inputs.sqft.value);
            formData.append('privateroom', privateroom);
            formData.append('privatebath', privatebath);
            formData.append('housingtype', housingtype);
            formData.append('laundry', laundry);
            formData.append('parking', parking);
            formData.append('availableon', formState.inputs.availableon.value);
            formData.append('address', `${formState.inputs.street.value}${formState.inputs.city.value}${formState.inputs.pincode.value}`);
            formData.append('creator', auth.userId);
            formData.append('postcity', `${location}`);
            formData.append('posttype', `${categoryType}`);
            formData.append('postform', `${form}`);
            await sendRequest(process.env.REACT_APP_BACKEND_URL + '/posts',
                'POST',
                formData,
                { Authorization: 'Bearer ' + auth.token }
            );
            history.push(`/${location}/${categoryType}/${form}/editimage`);
        } catch (err) {
        }
    };

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <MainHeader style={{ textAlign: 'left' }}>
                India > {location} > {categoryType} > {form}
            </MainHeader>
            <div className="job-form">
                <main>
                    <form onSubmit={postSubmitHandler} style={{ marginRight: '10px' }}>
                        {isLoading && <LoadingSpinner asOverlay />}
                        <div className="center first">
                            <FormInput
                                id="title"
                                element="input"
                                type="text"
                                label="posting title"
                                size="40"
                                color="black"
                                bordercolor="black"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                errorText="Please enter a valid title"
                            ></FormInput>
                            <FormInput
                                id="city"
                                element="input"
                                type="text"
                                label="city or neighbourhood"
                                size="40"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                errorText="Please enter a valid city or neighbourhood"
                            ></FormInput>
                            <FormInput
                                id="pincode"
                                element="input"
                                type="text"
                                label="pin code"
                                size="20"
                                color="black"
                                bordercolor="black"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                errorText="Please enter a valid pincode"
                            ></FormInput></div>
                        <div style={{ marginBottom: '200px' }}>
                            <FormInput
                                id="description"
                                rows="10"
                                type="textarea"
                                label="description"
                                size="120"
                                color="green"
                                bordercolor="green"
                                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                                onInput={inputHandler}
                                errorText="Please enter a valid description"></FormInput>
                        </div>
                        <div className="row" style={{ margin: '0px -10px 10px 0' }} className="col-12">
                            <fieldset >
                                <legend style={{ textAlign: 'left' }}>posting details</legend>
                                <div className="row">
                                <div className="col-lg-3" >
                                        <div style={{marginRight: "10px"}}>
                                        <FormInput
                                            id="rent"
                                            element="input"
                                            type="number"
                                            label="rent(in rupees)"
                                            placeholder="rent"
                                        size="70"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        onInput={inputHandler}
                                            errorText="Please enter a valid rent" />
                                    </div>
                                        <div style={{ marginRight: "10px" }}>
                                        <FormInput
                                            id="sqft"
                                            element="input"
                                            type="number"
                                            label="sqft"
                                            placeholder="sqft"
                                            size="70"
                                            validators={[VALIDATOR_REQUIRE()]}
                                            onInput={inputHandler}
                                            errorText="Please enter a valid sqft" />
                                    </div>
                                </div>
                                    <div className="col-lg-4" >
                                        <label style={{margin: '0'}}>private room</label>
                                        <Dropdown
                                        placeholder='-'
                                        fluid
                                        selection
                                        options={privateRoom}
                                        onChange={(event, { value }) => {
                                            setPrivateRoom(value);
                                            }} />
                                        <label style={{ margin: '0' }}>private bath</label>
                                        <Dropdown
                                            placeholder='-'
                                            fluid
                                            selection
                                            options={privateBath}
                                            onChange={(event, { value }) => {
                                                setPrivateBath(value);
                                            }} />
                                        <label style={{ margin: '0' }}>housing type</label>
                                        <Dropdown
                                            placeholder='-'
                                            fluid
                                            selection
                                            options={housingType}
                                            onChange={(event, { value }) => {
                                                setHousingType(value);
                                            }} />
                                        <label style={{ margin: '0' }}>laundry</label>
                                        <Dropdown
                                            placeholder='-'
                                            fluid
                                            selection
                                            options={laundryopt}
                                            onChange={(event, { value }) => {
                                                setLaundry(value);
                                            }} />
                                        <label style={{ margin: '0' }}>parking</label>
                                        <Dropdown
                                            placeholder='-'
                                            fluid
                                            selection
                                            options={parkingopt}
                                            onChange={(event, { value }) => {
                                                setParking(value);
                                            }} />
                                    </div>
                                    <div className="col-lg-5" >
                                        <FormInput
                                            id="availableon"
                                            element="input"
                                            type="date"
                                            label="avialable on"
                                            size="70"
                                            validators={() => { }}
                                            onInput={inputHandler}/>
                                    </div>
                                    </div>
                            </fieldset>
                        </div>
                        <div className="row" style={{ margin: '0px 10px' }}>
                            <fieldset >
                                <legend style={{ textAlign: 'left' }}>contact info</legend>
                                <div className="row" style={{ marginRight: '10px' }}>
                                    <div className="col-md-5" >
                                        <FormInput
                                            id="formemail"
                                            element="input"
                                            type="text"
                                            label="email"
                                            placeholder="Your email address"
                                            size="70"
                                            validators={[VALIDATOR_REQUIRE()]}
                                            onInput={inputHandler}
                                            errorText="Please enter a valid email address" />
                                    </div>
                                    <div className="col-md-5">
                                        <fieldset>
                                            <legend style={{ textAlign: 'left' }}>phone/ text</legend>
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <FormInput
                                                        id="phone"
                                                        element="input"
                                                        type="text"
                                                        label="phone number"
                                                        size="50"
                                                        validators={[VALIDATOR_REQUIRE()]}
                                                        onInput={inputHandler}
                                                        errorText="Please enter a valid phone number" />
                                                    <FormInput
                                                        id="contactname"
                                                        element="input"
                                                        type="text"
                                                        label="contact name"
                                                        size="50"
                                                        validators={[VALIDATOR_REQUIRE()]}
                                                        onInput={inputHandler}
                                                        errorText="Please enter a valid contact name"></FormInput>
                                                </div>
                                                <div className="col-md-5 col-sm-3 col-xs-3">
                                                    <FormInput
                                                        id="extension"
                                                        element="input"
                                                        type="text"
                                                        label="extension"
                                                        size="50"
                                                        validators={[VALIDATOR_REQUIRE()]}
                                                        onInput={inputHandler}
                                                        errorText="Please enter a valid extension"></FormInput>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <fieldset style={{ marginTop: '10px' }}>
                            <legend style={{ textAlign: 'left' }}>location info</legend>
                            <div className="row">
                                <div className="col-md-4">
                                    <FormInput
                                        id="street"
                                        element="input"
                                        type="text"
                                        label="street"
                                        size="50"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        onInput={inputHandler}
                                        errorText="Please enter a valid street"></FormInput>
                                </div>
                                <div className="col-md-4">
                                    <FormInput
                                        id="crossstreet"
                                        element="input"
                                        type="text"
                                        label="cross street"
                                        size="50"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        onInput={inputHandler}
                                        errorText="Please enter a valid cross street"></FormInput>
                                </div>
                                <div className="col-md-3">
                                    <FormInput
                                        id="cityy"
                                        element="input"
                                        type="text"
                                        label="city"
                                        size="50"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        onInput={inputHandler}
                                        errorText="Please enter a valid city"></FormInput>
                                </div>
                            </div>
                        </fieldset>
                        <div className="center">
                            <button
                                type="submit"
                                onClick={postSubmitHandler}
                                disabled={!formState.isValid}
                            >continue</button>
                        </div>
                    </form>
                </main>
            </div>
        </React.Fragment>
    )
};

export default HousingForm;