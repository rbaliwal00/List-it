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

const SaleForm = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [condition, setCondition] = useState('-');

    const Condition = [
        {
            key: '-',
            text: '-',
            value: '-'
        },
        {
            key: 'new',
            text: 'new',
            value: 'new'
        },
        {
            key: 'like-new',
            text: 'like-new',
            value: 'like-new',
        },
        {
            key: 'excellent',
            text: 'excellent',
            value: 'excellent',
        },
        {
            key: 'good',
            text: 'good',
            value: 'good',
        },
        {
            key: 'fair',
            text: 'fair',
            value: 'fair',
        },
        {
            key: 'salvage',
            text: 'salvage',
            value: 'salvage',
        },
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
            makemanufacturer: {
                value: '',
                isValid: true
            },
            modelnamenumber: {
                value: '',
                isValid: true
            },
            sizedimensions: {
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
            formData.append('makemanufacturer', formState.inputs.makemanufacturer.value);
            formData.append('modelnamenumber', formState.inputs.modelnamenumber.value);
            formData.append('sizedimensions', formState.inputs.sizedimensions.value);
            formData.append('condition', condition);
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
                                    <div className="col-lg-4" >
                                        <div style={{ marginRight: "10px" }}>
                                            <FormInput
                                                id="makemanufacturer"
                                                element="input"
                                                type="text"
                                                label="make / manufacturer"
                                                size="70"
                                                onInput={inputHandler}
                                                errorText="Please enter a valid make-manufacturer" />
                                        </div>
                                        <div style={{ marginRight: "10px" }}>
                                            <FormInput
                                                id="modelnamenumber"
                                                element="input"
                                                type="text"
                                                label="model name / number"
                                                size="70"
                                                onInput={inputHandler}
                                                errorText="Please enter a valid model name / number" />
                                        </div>
                                        <div style={{ marginRight: "10px" }}>
                                            <FormInput
                                                id="sizedimensions"
                                                element="input"
                                                type="text"
                                                label="size / dimensions"
                                                size="70"
                                                onInput={inputHandler}
                                                placeholder="length x width x height"
                                                errorText="Please enter a valid size / dimensions" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4" >
                                        <label style={{ margin: '0' }}>condition</label>
                                        <Dropdown
                                            placeholder='-'
                                            fluid
                                            selection
                                            options={Condition}
                                            onChange={(event, { value }) => {
                                                setCondition(value);
                                            }} />
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

export default SaleForm;