import React, { useContext, useState } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import Map from '../../shared/UIElements/Map';
import MainHeader from '../../shared/Components/MainHeader';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../hooks/http-hook';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import Carousel from 'react-bootstrap/Carousel'
import './PostingItem.css';

const PostingItem = props => {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const { location, categoryType, form } = useParams();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [index, setIndex] = useState(0);
    const auth = useContext(AuthContext);
    const history = useHistory();
    var link = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + props.formemail + '&su=' + props.title + '' + '&body=%0D%0A%0D%0A' + window.location.href + '%0D%0A';

    const confirmDeleteHandler = async () => {
        try {
            await sendRequest(process.env.REACT_APP_BACKEND_URL + `/posts/${props.id}`,
                'DELETE',
                { Authorization: 'Bearer ' + auth.token });
            props.onDelete(props.id);
            history.push('/' + auth.userId + '/posts');
        } catch (err) { } 
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <div className="mh">
                {isLoading && <LoadingSpinner asOverlay />}
                <MainHeader>
                    <nav className="unwanted-nav">
                        <p>India > {props.city} > {props.type} > {props.form} ></p>
                    </nav>
                </MainHeader>
                <main style={{ marginTop: '30px' }}>
                    <div className="row justify-content-center" style={{ margin: '5px 10px 10px 0'}}>
                        <div className="col-lg-5">   
                            <button className="reply-button"><a href={link} target="_blank">reply</a></button>
                        </div>
                        <div className="col-lg-3">
                        </div>
                    </div>
                    <div className="row justify-content-center" style={{ margin: '5px 10px 10px 0', position: 'relative'}}>
                        <div className="col-lg-5">
                            {props.rent && (<div className="row">
                                <div className="col-10">
                                    <h2>{props.title} <span className="titleCity"> ({props.city.toUpperCase()})</span> - ₹{props.rent}</h2>
                                </div>
                            </div>)}
                            {!props.rent && (<h2>{props.title} <span className="titleCity"> ({props.city.toUpperCase()})</span></h2>)}
                            {props.images && (<Carousel activeIndex={index} onSelect={handleSelect}>
                                {props.images.map(image => (
                                    <Carousel.Item>
                                            <img
                                            className="d-block fixed w-100"
                                            src={image}
                                            alt="First slide"
                                            />
                                    </Carousel.Item>
                                    ))}
                            </Carousel>)}
                            <pre className="pre">{props.description}</pre>
                            <div className="d-none d-lg-block">
                                {auth.userId === props.creatorId && (<button className="update-button">
                                    <NavLink to={`/post/${props.id}`}>update</NavLink></button>
                                )}
                                {auth.userId === props.creatorId && (<button className="update-button"
                                    onClick={confirmDeleteHandler}>
                                <NavLink to={`/`}>delete</NavLink></button>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-3 " style={{height: '300px', marginTop: '10px'}}>
                            <Map
                                center={props.coordinates}
                                zoom={16}
                                />
                            {props.compensation && (<label className="center lab">compensation: {props.compensation}</label>)}
                            {props.employmentType && (<label className="center lab">employment type: {props.employmentType}</label>)}
                            {props.availableon && (<label className="center lab">available on: {props.availableon.substring(8, 10) + " " + months[props.availableon.substring(6, 7)]}</label>)}
                            {props.sqft && (<label className="center lab">sqft: {props.sqft}</label>)}
                            {props.privateroom && (<label className="center lab">{props.privateroom}</label>)}
                            {props.privatebath && (<label className="center lab">{props.privatebath}</label>)}
                            {props.laundry && (<label className="center lab">{props.laundry}</label>)}
                            {props.housingtype && (<label className="center lab">{props.housingtype}</label>)}
                            {props.parking && (<label className="center lab">{props.parking}</label>)}
                            {props.makemanufacturer && (<label className="center lab">{props.makemanufacturer}</label>)}
                            {props.modelnamenumber && (<label className="center lab">{props.modelnamenumber}</label>)}
                            {props.sizedimensions && (<label className="center lab">{props.sizedimensions}</label>)}
                            {props.condition && (<label className="center lab">{props.condition}</label>)}
                            <div className="d-lg-none" style={{marginTop: '-50px' }}>
                                {auth.userId === props.creatorId && (<button className="update-button">
                                    <NavLink to={`/post/${props.id}`}>update</NavLink></button>
                                )}
                                {auth.userId === props.creatorId && (<button className="update-button"
                                    onClick={confirmDeleteHandler}>
                                    <NavLink to={`/`}>delete</NavLink></button>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
        );
};

export default PostingItem;