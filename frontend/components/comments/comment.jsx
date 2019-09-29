import React from 'react';
import CommentForm from './comment_form';
import Comment from './comment';
// import { Link } from 'react-router-dom';

export default ({ comment, createComment, upVoteComment, downVoteComment}) => (
    <div className="sub-container">
        <p>Body: {comment.body}</p>
        <p>Author: {comment.username}</p>
        <p>Created at: {new Date(comment.created_at).toDateString()}</p>
        <p>Votes: {comment.votes }
            <button onClick={(e) => upVoteComment(comment.id)}>Upvote</button>
            <button onClick={(e) => downVoteComment(comment.id)}>Downvote</button>
        </p>
        <CommentForm
            parent_comment_id={comment.id}
            post_id={comment.post_id}
            createComment={createComment}
        />
         { comment.child_comments && comment.child_comments.length > 0 ? 
             (comment.child_comments.map( child_comment => <Comment
             createComment={createComment} 
             comment={child_comment} 
             key={child_comment.id}
             upVoteComment={upVoteComment}
             downVoteComment={downVoteComment}
             />)) :
           "" 
        }
    </div>
) 
