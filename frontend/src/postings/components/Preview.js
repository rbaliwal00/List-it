import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import MainHeader from '../../shared/Components/MainHeader';
import Map from '../../shared/UIElements/Map';
import { useHttpClient } from '../hooks/http-hook';
import './Preview.css';

const Preview = props => {
    const { location, categoryType, form } = useParams();
    const [title, setTitle] = useState();
    const [city, setCity] = useState();
    const [description, setDescription] = useState();
    const [compensation, setCompensation] = useState();
    let history = useHistory();
    const { sendRequest } = useHttpClient();
    const [postId, setPostId] = useState(); 

    const handleClick = () => {
        history.push(`/postings/p1`);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5000/api/posts/lastpost`);
                setTitle(responseData.post.title);
                setCity(responseData.post.city);
                setDescription(responseData.post.description);
                setCompensation(responseData.post.compensation);
            } catch (err) { }
        };
        fetchPosts();
    }, [sendRequest]);

    return (
        <React.Fragment>
            <MainHeader>
                <nav className="unwanted-nav">
                    <p>India > {location} > {categoryType} > {form}</p>
                </nav>
            </MainHeader>
            <main>
                <div className="holding-container">
                <div className="top">
                    <div className="desc">
                        <p>Description</p>
                    </div>
                    <div className="pri">
                        <p>Price</p>
                    </div>      
                </div>
                <div className="description">
                    <p>Some Descrption</p>
                </div>
                <div className="nav">
                    <p>India > {location} > {categoryType} > {form}</p>
                    <p>200</p>
                </div>
                <div className="amount">
                    <p>Total amount charged: </p>
                    <p>200</p>
                </div>
                <div className="draft">
                    <p>this is an unpublished draft</p>
                    <button>publish</button>
                </div>
                    <div className="buttons">
                        <button onClick={handleClick}>edit post</button>
                        <button>edit location</button>
                        <button>edit image</button>
                    </div>
                    <div className="nav-tags">
                        <p>India > {location} > {categoryType} > {form}</p>
                    </div>
                    <div className="reply">
                        <button>reply</button>
                    </div>
                    <div className="content">
                        <div className="content-text">
                            <p style={{ fontSize: '130%', fontWeight: 'bold' }}>{title} ({city})</p>
                            <p>{description}</p>
                        </div>
                        <div className="content-map">
                            <Map center={{ lat: 30.923, lng: 75.921621 }} zoom={16} />
                            <label>compensation: {compensation}</label>
                            <label>employment-type: full-time</label>
                            <button className="publish">publish</button>
                        </div>
                        
                    </div>
                    <div className="buttons bottom">
                        <button>edit post</button>
                        <button>edit location</button>
                        <button >edit image</button>
                    </div>
                </div>
            </main>
            </React.Fragment>
        )
};

export default Preview;