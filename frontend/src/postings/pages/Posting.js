import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostingItem from '../components/PostingItem';
import { useHttpClient } from '../hooks/http-hook';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';

const Posting = () => {
    const [loadedPost, setLoadedPost] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const postId = useParams().postId;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `/posts/${postId}`);
                setLoadedPost(responseData.post);
            } catch (err) { }
        };
        fetchPosts();
    }, [sendRequest, postId]);

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && <div className="center">
                <LoadingSpinner />
            </div>}
            {!isLoading && loadedPost && <PostingItem key={loadedPost.id}
                id={loadedPost.id}
                title={loadedPost.title}
                description={loadedPost.description}
                city={loadedPost.city}
                compensation={loadedPost.compensation}
                rent={loadedPost.rent}
                sqft={loadedPost.sqft}
                privateroom={loadedPost.privateroom}
                privatebath={loadedPost.privatebath}
                housingtype={loadedPost.housingtype}
                laundry={loadedPost.laundry}
                parking={loadedPost.parking}
                availableon={loadedPost.availableon}
                makemanufacturer={loadedPost.makemanufacturer}
                modelnamenumber={loadedPost.modelnamenumber}
                sizedimensions={loadedPost.sizedimensions}
                condition={loadedPost.condition}
                employmentType={loadedPost.employment}
                position={loadedPost.position}
                formemail={loadedPost.formemail}
                creatorId={loadedPost.creator}
                type={loadedPost.posttype}
                form={loadedPost.postform}
                images={loadedPost.images}
                coordinates={loadedPost.location}/>}
        </React.Fragment>
    );
}

export default Posting;