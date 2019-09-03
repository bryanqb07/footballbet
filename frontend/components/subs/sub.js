import React from 'react';
import { Link } from 'react-router-dom';


export default ({sub}) => (
    <Link to={`/subs/${sub.id}`}>
        <div className="sub-container">
            <p>Title: {sub.title}</p>
            <p>Description: {sub.description}</p>
        </div>
    </Link>
) 