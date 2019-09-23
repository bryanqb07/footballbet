import React from 'react';
import { Link } from 'react-router-dom';

export default ({sub, user_id, subscribe}) => (
    <Link to={`/subs/${sub.id}`}>
        <div className="sub-container">
            <p>Title: {sub.title}</p>
            <p>Description: {sub.description}</p>
            <p>Created at: {new Date(sub.created_at).toDateString()}</p>
            {/* {
                user_id ? <button onClick={(e) => subscribe(user_id, sub.id)}>Subscribe</button> : ""
            } */}
            <button onClick={(e) => subscribe(user_id, sub.id)}>Subscribe</button>
        </div>
    </Link>
) 