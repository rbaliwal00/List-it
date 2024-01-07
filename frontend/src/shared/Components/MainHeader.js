import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../context/auth-context';
import './MainHeader.css';

const MainHeader = props => {
    const auth = useContext(AuthContext);
    return <header className="main-header">
        <div className="col-9">
            <div>
                <h1 style={{marginTop: '10px', marginBottom: '0px'}}><NavLink to="/" style={{ color: 'gray' }}>ListIt  <sup>in</sup></NavLink></h1>
                <h4 style={{ marginTop: '0px' }}>{props.children}</h4>
            </div>
        </div>
        <nav className="col-3">
            <div className="row">
                {!auth.isLoggedIn && (<p className="col-sm-4" style={{padding: '0px'}}><NavLink to="/auth">[ Login ]</NavLink></p>)}
                {!auth.isLoggedIn && (<p className="col-sm-8" style={{ padding: '0px' }}><NavLink to="/create-account">[ Create Account ]</NavLink></p>)}  
                </div>
            {auth.isLoggedIn && (<p className="col-sm-4" style={{ padding: '0px', float: 'right' }}><NavLink to="/" onClick={auth.logout}>[ Logout ]</NavLink></p>)}
        </nav>
    </header>;
};

export default MainHeader;
