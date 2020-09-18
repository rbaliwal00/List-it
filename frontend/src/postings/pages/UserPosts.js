import React, { useEffect, useState, useContext} from 'react';
import { useParams, NavLink, useHistory} from 'react-router-dom';

import PostingList from '../components/PostingList';
import { useHttpClient } from '../hooks/http-hook';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import MainHeader from '../../shared/Components/MainHeader';
import { AuthContext } from '../../shared/context/auth-context';
import './UserPosts.css';

const UserPosts = () => {
    const [loadedPosts, setLoadedPosts] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const userId = useParams().userId;
    const history = useHistory();
    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `/posts/user/${userId}`);
                setLoadedPosts(responseData.posts);
            } catch (err) { }
        };
        fetchPlaces();
    }, [sendRequest, userId]);

    const postDeletedHandler = async (id) => {
        try {
            await sendRequest(process.env.REACT_APP_BACKEND_URL + `/posts/${id}`, 'DELETE',
                { Authorization: 'Bearer ' + auth.token });
            setLoadedPosts(prevposts =>
            prevposts.filter(post =>
            post.id !== id));
            history.push('/' + userId + '/posts');
        } catch (err) { }
    }

    if (!loadedPosts) {
        return (
            <React.Fragment>
                <div style={{
                    border: '1px solid gray',
                    textAlign: 'center',
                    background: 'lightgray',
                    height: '60px',
                    paddingTop: '10px',
                    borderRadius: '5px',
                    width: '100%',
                }}>
                    <h1 style={{
                        width: '100%'
                    }}>
                        <NavLink to="/"
                            style={{
                                color: 'gray',
                                width: '100%'
                            }}>ListIt  <sup>in</sup></NavLink>
                    </h1>
                </div>
                <h2 className="center">You haven't created any post yet. Create One!</h2>
                <p className="center"><NavLink to="/postings/new/location" exact style={{ textDecoration: 'none' }}>Create Posting</NavLink></p>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            
                <ErrorModal error={error} onClear={clearError} />
                {isLoading && <div className="center">
                    <LoadingSpinner />
            </div>}
            <div style={{
                border: '1px solid gray',
                textAlign: 'center',
                background: 'lightgray',
                height: '60px',
                paddingTop: '10px',
                borderRadius: '5px',
                width: '100%',
            }}>
                <h1 style={{
                    width: '100%'
                }}>
                    <NavLink to="/"
                        style={{
                            color: 'gray',
                            width: '100%'
                        }}>ListIt  <sup>in</sup></NavLink>
                </h1>
            </div>

                <div className="grid-container">
                    <div className="userposts-heading">Title</div>
                    <div className="userposts-heading">manage</div>
                    <div className="userposts-heading">area and category</div>
                    <div className="userposts-heading"> posted date</div>
                    {!isLoading && loadedPosts && loadedPosts.map(post =>
                        <React.Fragment key={post.id}>
                            <div className="userposts-content">{post.title}</div>
                            <div className="userposts-content">
                                <span style={{ marginRight: '10px' }}><NavLink to={`/postings/${post.id}`}>display</NavLink></span>
                                <span onClick={() => postDeletedHandler(post.id)} style={{color: 'red'}}>delete</span>
                            </div>
                            <div className="userposts-content">{post.city}</div>
                            <div className="userposts-content">{post.timePosted}</div>
                            </React.Fragment>
                    )}
                </div>
            
            </React.Fragment>
        );
}

export default UserPosts;