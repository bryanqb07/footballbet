import React from 'react';
// import { Link } from 'react-router-dom';


export default ({ post }) => (
        <div className="sub-container">
            <p>Title: {post.title}</p>
            <p>Content: {post.content}</p>
            <h3>Comments</h3>
            
        </div>
) 
