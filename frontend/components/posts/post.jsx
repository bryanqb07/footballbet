import React from 'react';
// import { Link } from 'react-router-dom';
import CommentsIndexContainer from '../comments/comments_index_container';

export default ({ post }) => (
        <div className="sub-container">
            <p>Title: {post.title}</p>
            <p>Content: {post.content}</p>
            <p>Author: {post.username}</p>
            <CommentsIndexContainer comment_ids={post.parent_comment_ids} post_id={post.id} />
        </div>
) 
