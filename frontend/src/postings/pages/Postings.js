import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { useHttpClient } from '../hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';

const Postings = () => {
    const [loadedPosts, setLoadedPosts] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const { type, form } = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
            let responseData;
            try {
                if (type) {
                    responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `/posts/type/${type}`);
                }
                else {
                    responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `/posts/form/${form}`);
                }
                setLoadedPosts(responseData.posts);
            } catch (err) { }
        };
        fetchPosts();
    }, [sendRequest]);

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (!isLoading && loadedPosts && loadedPosts.length == 0) {
        return (
            <React.Fragment>
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
                <h2 className="center">There isn't any post for this category yet. Create One!</h2>
                {!auth.isLoggedIn && (<div><p className="center"><NavLink to="/auth" exact style={{ textDecoration: 'none' }}>Authentication</NavLink>  
                </p><p className="center">(Authentication Needed to create a post.)</p></div>
                  
                )}
                {auth.isLoggedIn && (<p className="center"><NavLink to="/postings/new/location" exact style={{ textDecoration: 'none' }}>Create Posting</NavLink></p>)}
            </React.Fragment>
        );
    };
    return (
        <React.Fragment>
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
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && <div className="center">
                <LoadingSpinner />
            </div>}
            {!isLoading && loadedPosts && <ul>
                {loadedPosts.map(post => <li key={post.id}>
                    <NavLink to={`/postings/${post.id}`}>
                        <span style={{color: 'gray', fontSize: '13px'}}>{months[post.timePosted.substring(6, 7)] + "  "}</span>
                        <span style={{ color: 'gray', fontSize: '13px' }}>{post.timePosted.substring(8, 10) + " "}</span>
                        <span style={{ color: 'blue', fontSize: '16px' }}>{" " + post.title}</span>
                        <span style={{ color: 'black', fontSize: '13px' }}>({post.city.toUpperCase()})</span></NavLink></li>)}
            </ul>}
        </React.Fragment>
    );
}

export default Postings;