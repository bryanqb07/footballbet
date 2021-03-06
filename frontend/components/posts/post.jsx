import React from 'react';
// import { Link } from 'react-router-dom';
import CommentsIndexContainer from '../comments/comments_index_container';

export default ({ post, upVotePost, downVotePost }) => (
        <div className="sub-container">
            <p>Title: {post.title}</p>
            <p>Content: {post.content}</p>
            <p>Author: {post.username}</p>
            <p>Created at: {new Date(post.created_at).toDateString()}</p>
            <p>Votes: { post.votes }
                <button onClick={(e) => upVotePost(post.id)}>Upvote</button>
                <button onClick={(e) => downVotePost(post.id)}>Downvote</button>
            </p>
            <CommentsIndexContainer comment_ids={post.parent_comment_ids} post_id={post.id} />
        </div>
) 
