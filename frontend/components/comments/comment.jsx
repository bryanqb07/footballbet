import React from 'react';
import CommentForm from './comment_form';
import Comment  from './comment';
// import { Link } from 'react-router-dom';


export default ({ comment }) => (
    <div className="sub-container">
        <p>Body: {comment.body}</p>
        <p>Author: {comment.username}</p>
       
         { comment.child_comments && comment.child_comments.length > 0 ? 
             (comment.child_comments.map( (comment, idx) => <Comment comment={comment} key={idx} />)) :
           "" 
        }
        <CommentForm 
            parent_comment_id={comment.id} 
        />
    </div>
) 
