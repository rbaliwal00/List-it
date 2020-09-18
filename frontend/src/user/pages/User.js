import React, { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import FormInput from '../../shared/UIElements/FormInput';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import { useForm } from '../../postings/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import { useHttpClient } from '../../postings/hooks/http-hook';
import MainHeader from '../../shared/Components/MainHeader';
import './User.css';

const User = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm({
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
        history.push(`/create-account`);
    };

    const authSubmitHandler = async event => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/users/login',
                'POST',
                JSON.stringify({
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                }),
                {
                    'Content-Type': 'application/json'
                });
            auth.login(responseData.userId, responseData.token);
            history.push(`/`);
        } catch (err) {

        }
    }

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
        <main className="job-form" style={{ marginTop: '50px' }}>
                <h2 className="center"
                    style={{
                        backgroundColor: 'lightgrey',
                        width: '200px',
                        height: '50px',
                        margin: 'auto',
                        color: 'black',
                        borderRadius: '3px'
                    }}>Login Required</h2>
            <hr />
                <form onSubmit={authSubmitHandler}>
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
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid password (at least 5 characters)"
                    onInput={inputHandler}
                    />
                    <div className="center" style={{marginBottom: '100px'}}>
                    <button
                            type="submit"
                            disabled={!formState.isValid}
                            className=""
                           >LOGIN</button>
                    </div>
                </form>
                <p className="center">Don't have an account! Signup here</p>
                <div className="center">
                    <button onClick={switchModeHandler}>SIGNUP</button>
                </div>
            </main>
            </div>
            </React.Fragment>
    );
};

export default User;
