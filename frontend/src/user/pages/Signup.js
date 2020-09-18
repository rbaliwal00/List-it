import React, { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import FormInput from '../../shared/UIElements/FormInput';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../postings/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import { useHttpClient } from '../../postings/hooks/http-hook'; 
import ImageUpload from '../../shared/UIElements/ImageUpload';
import './User.css';

const User = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const [formState, inputHandler] = useForm({
        name: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);

    let history = useHistory();

    const switchModeHandler = () => {
        history.push(`/auth`);
    };

    const authSubmitHandler = async event => {
        event.preventDefault();

        console.log(formState.inputs);
        try {
            const formData = new FormData();
            formData.append('name', formState.inputs.name.value);
            formData.append('email', formState.inputs.email.value);
            formData.append('password', formState.inputs.password.value);
            const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL  + '/users/signup',
                'POST',
                formData
            );
            auth.login(responseData.userId, responseData.token);
            history.push(`/`);
        } catch (error) {
        }
        
    };
    console.log(formState.inputs);
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <div>
            {isLoading && <LoadingSpinner asOverlay />}
                <div style={{
                    border: '1px solid gray',
                    textAlign: 'center',
                    background: 'lightgray',
                    height: '60px',
                    paddingTop: '10px',
                    borderRadius: '5px'
                }}>
                    <h1>
                        <NavLink to="/"
                            style={{
                                color: 'gray'
                            }}>ListIt  <sup>in</sup></NavLink>
                    </h1>
                </div>
            <main className="job-form" style={{ marginTop: '30px' }}>
                <h2 className="center"
                    style={{
                        backgroundColor: 'lightgrey',
                        width: '250px',
                        height: '50px',
                        margin: 'auto',
                        color: 'black',
                        borderRadius: '3px'
                    }}>Create a new account</h2>
                <hr />
                    <form onSubmit={authSubmitHandler}>
                    <FormInput
                        type="name"
                        label="Your Name"
                        element="input"
                        id="name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid name"
                        onInput={inputHandler}
                        />
                    <FormInput
                        type="email"
                        label="E-Mail"
                        element="input"
                        id="email"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter a valid email address"
                        onInput={inputHandler}
                    />
                    <FormInput
                        type="password"
                        label="Password"
                        element="input"
                        id="password"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Please enter a valid password (at least 6 characters)"
                        onInput={inputHandler}
                    />
                    <div className="center" style={{ marginBottom: '30px' }}>
                    <button
                        type="submit"
                        disabled={!formState.isValid}
                        className="">SIGNUP</button>
                    </div>
                </form>
                <p className="center">Already have an account. Login instead!</p>
                <div className="center">
                    <button onClick={switchModeHandler}>LOGIN</button>
                </div>
            </main>
            </div>
        </React.Fragment>
    );
};

export default User;