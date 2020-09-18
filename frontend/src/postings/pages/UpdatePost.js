import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import FormInput from '../../shared/UIElements/FormInput';
import MainHeader from '../../shared/Components/MainHeader';
import InputList from '../../shared/UIElements/InputList';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import 'semantic-ui-css/semantic.min.css'
import { useForm } from '../hooks/form-hook';
import { useHttpClient } from '../hooks/http-hook';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import { AuthContext } from '../../shared/context/auth-context';

const UpdatePost = () => {
    const [loadedPost, setLoadedPost] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const postId = useParams().postId;
    const history = useHistory();
    const [formState, inputHandler, setFormData] = useForm({
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
        compensation: {
            value: '',
            isvalid: false
        },
        formemail: {
            value: '',
            isvalid: false
        },
        phone: {
            value: '',
            isvalid: false
        },
        contactname: {
            value: '',
            isvalid: false
        },
        extension: {
            value: '',
            isvalid: false
        },
        street: {
            value: '',
            isvalid: false
        },
        crossstreet: {
            value: '',
            isvalid: false
        },
        cityy: {
            value: '',
            isvalid: false
        }
    }, false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `/posts/${postId}`);
                setLoadedPost(responseData.post);
                setFormData({
                    title: {
                        value: responseData.post.title,
                        isValid: true
                    },
                    city: {
                        value: responseData.post.city,
                        isValid: true
                    },
                    pincode: {
                        value: responseData.post.pincode,
                        isValid: true
                    },
                    description: {
                        value: responseData.post.description,
                        isValid: true
                    },
                    compensation: {
                        value: responseData.post.compensation,
                        isValid: true
                    },
                    formemail: {
                        value: responseData.post.formemail,
                        isValid: true
                    },
                    phone: {
                        value: responseData.post.phone,
                        isValid: true
                    },
                    contactname: {
                        value: responseData.post.contactname,
                        isValid: true
                    },
                    extension: {
                        value: responseData.post.extension,
                        isValid: true
                    },
                    street: {
                        value: responseData.post.street,
                        isValid: true
                    },
                    crossstreet: {
                        value: responseData.post.crossstreet,
                        isValid: true
                    },
                    cityy: {
                        value: responseData.post.cityy,
                        isValid: true
                    }
                }, true);
            } catch (err) { }
        };
        fetchPost();
    }, [sendRequest, postId,setFormData]);

    const postUpdateSubmitHandler = async event => {
        event.preventDefault();
        try {
            await sendRequest(`http://localhost:5000/api/posts/${postId}`,
                'PATCH',
                JSON.stringify({
                    title: formState.inputs.title.value,
                    city: formState.inputs.city.value,
                    pincode: formState.inputs.pincode.value,
                    description: formState.inputs.description.value,
                    compensation: formState.inputs.compensation.value,
                    formemail: formState.inputs.formemail.value,
                    phone: formState.inputs.phone.value,
                    extension: formState.inputs.extension.value,
                    contactname: formState.inputs.contactname.value,
                    street: formState.inputs.street.value,
                    crossstreet: formState.inputs.crossstreet.value,
                    cityy: formState.inputs.cityy.value
                }),
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                }
            );
            history.push('/' + auth.userId + '/posts');
        } catch (err) {}  
    }

    if (isLoading) {
        return (
            <div className="center">
                <LoadingSpinner />
            </div>);
    }
    console.log(loadedPost);
    if (!loadedPost && !error) {
        return (
            <div className="center">
                <h2>Could not find post!</h2>
            </div>
        );
    } 

        return (
            <React.Fragment>
                <ErrorModal error={error} onClear={clearError} />
                <MainHeader>
                    <nav className="wan">
                        <p>India > </p>
                    </nav>
                </MainHeader>
                {!isLoading && loadedPost && <div className="job-form">
                    
                    <main>
                        <form onSubmit={postUpdateSubmitHandler}>
                            <div className="center first">
                                <FormInput
                                    id="title"
                                    element="input"
                                    type="text" label="posting title"
                                    size="40"
                                    color="black"
                                    bordercolor="black"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    errorText="Please enter a valid title"
                                    initialValue={loadedPost.title}
                                    initialValid={true}
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
                                    initialValue={loadedPost.city}
                                    initialValid={true}
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
                                    initialValue={loadedPost.pincode}
                                    initialValid={true}
                                ></FormInput></div>
                            <div className="center" style={{ marginBottom: '200px' }}>
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
                                    errorText="Please enter a valid description"
                                    initialValue={loadedPost.description}
                                    initialValid={true}></FormInput>
                            </div>
                            <div>
                                <fieldset >
                                    <legend>posting details</legend>
                                    <div className="column50">
                                        
                                    </div>
                                    <div className="column50">
                                        <InputList
                                            element="input"
                                            value="1"
                                            type="checkbox">direct contact by recruiters is ok</InputList>
                                        <InputList
                                            element="input"
                                            value="1"
                                            type="checkbox">internship</InputList>
                                        <InputList
                                            element="input"
                                            value="1"
                                            type="checkbox">non-profit organisation</InputList>
                                        <InputList
                                            element="input"
                                            value="1"
                                            type="checkbox">relocation assisance available</InputList>
                                        <InputList
                                            element="input"
                                            value="1"
                                            type="checkbox">telecommuting ok</InputList>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="center">
                                <FormInput
                                    id="compensation"
                                    element="input"
                                    type="text"
                                    label="compensation"
                                    placeholder="describe compensation here (please be as detailed as possible)"
                                    size="120"
                                    bordercolor="green"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    errorText="Please enter a valid compensation"
                                    initialValue={loadedPost.compensation}
                                    initialValid={true}></FormInput>
                            </div>
                            <div className="row">
                                <fieldset >
                                    <legend>contact info</legend>
                                    <div className="column1">
                                        <FormInput
                                            id="formemail"
                                            element="input"
                                            type="text"
                                            label="email"
                                            placeholder="Your email address"
                                            size="70"
                                            validators={[VALIDATOR_REQUIRE()]}
                                            onInput={inputHandler}
                                            errorText="Please enter a valid compensation"
                                            initialValue={loadedPost.formemail}
                                            initialValid={true} />
                                        <p>email privacy options ?</p>
                                        <InputList
                                            element="input"
                                            value="1"
                                            type="radio">SALEIT mail relay (recommended)</InputList>
                                        <InputList
                                            element="input"
                                            value="1"
                                            type="radio">show my real email address</InputList>
                                        <InputList
                                            element="input"
                                            value="1"
                                            type="radio"
                                        >no replies to this email</InputList>
                                    </div>
                                    <div className="column2">
                                        <fieldset>
                                            <legend>phone/ text</legend>
                                            <div className="column">
                                                <InputList
                                                    element="input"
                                                    value="1"
                                                    type="checkbox"
                                                >show my phone number</InputList>
                                            </div>
                                            <div className="column">
                                                <InputList
                                                    element="input"
                                                    value="1"
                                                    type="checkbox"
                                                >phone calls OK</InputList>
                                            </div>
                                            <div className="column">
                                                <InputList
                                                    element="input"
                                                    value="1"
                                                    type="checkbox"
                                                >texts/sms OK</InputList>
                                            </div>
                                            <div className="column-phone">
                                                <FormInput
                                                    id="phone"
                                                    element="input"
                                                    type="text"
                                                    label="phone number"
                                                    size="50"
                                                    validators={[VALIDATOR_REQUIRE()]}
                                                    onInput={inputHandler}
                                                    errorText="Please enter a valid phone number"
                                                    initialValue={loadedPost.phone}
                                                    initialValid={true} />
                                                <FormInput
                                                    id="contactname"
                                                    element="input"
                                                    type="text"
                                                    label="contact name"
                                                    size="50"
                                                    validators={[VALIDATOR_REQUIRE()]}
                                                    onInput={inputHandler}
                                                    errorText="Please enter a valid contact name"
                                                    initialValue={loadedPost.contactname}
                                                    initialValid={true}></FormInput>
                                            </div>
                                            <div className="column-extension">
                                                <FormInput
                                                    id="extension"
                                                    element="input"
                                                    type="text"
                                                    label="extension"
                                                    size="50"
                                                    validators={[VALIDATOR_REQUIRE()]}
                                                    onInput={inputHandler}
                                                    errorText="Please enter a valid extension"
                                                    initialValue={loadedPost.extension}
                                                    initialValid={true}></FormInput>
                                            </div>
                                        </fieldset>
                                    </div>
                                </fieldset>
                            </div>
                            <fieldset>
                                <legend>location info</legend>
                                <InputList
                                    element="input"
                                    value="1"
                                    type="checkbox"
                                >show my address</InputList>
                                <div className="column">
                                    <FormInput
                                        id="street"
                                        element="input"
                                        type="text"
                                        label="street"
                                        size="50"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        onInput={inputHandler}
                                        errorText="Please enter a valid street"
                                        initialValue={loadedPost.street}
                                        initialValid={true}></FormInput>
                                </div>
                                <div className="column">

                                    <FormInput
                                        id="crossstreet"
                                        element="input"
                                        type="text"
                                        label="cross street"
                                        size="50"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        onInput={inputHandler}
                                        errorText="Please enter a valid cross street"
                                        initialValue={loadedPost.crossstreet}
                                        initialValid={true}></FormInput>

                                </div>
                                <div className="column">
                                    <FormInput
                                        id="cityy"
                                        element="input"
                                        type="text"
                                        label="city"
                                        size="50"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        onInput={inputHandler}
                                        errorText="Please enter a valid city"
                                        initialValue={loadedPost.cityy}
                                        initialValid={true}></FormInput>
                                </div>
                            </fieldset>
                            <div className="center">
                                <button
                                    type="submit"
                                    disabled={!formState.isValid}
                                >continue</button>
                            </div>
                        </form>
                    </main>
                </div>}
            </React.Fragment>
        );
    }

export default UpdatePost;