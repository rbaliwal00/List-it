import React from 'react';

import PostingItem from './PostingItem';

const PostingList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
            <h2>No postings yet.</h2>
            </div>
        )
    }
    return (<ul>
        {props.items.map(post => <PostingItem
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            city={post.city}
            compensation={post.compensation}
            position={post.position}
            creatorId={post.creator}
            coordinates={post.location}
            form={post.postform}
            type={post.posttype}
            onDelete={props.onDeletePost}
        />)}

    </ul>)
};

export default PostingList;