import React from 'react';
import { Link } from 'react-router-dom';


export default ({ sub }) => (
    <Link to={`subs/${sub.id}`}>
        <div className="sub-search-item">
            <span> Title: {sub.title}  Description: {sub.description}</span>    
        </div>
    </Link>
) 
