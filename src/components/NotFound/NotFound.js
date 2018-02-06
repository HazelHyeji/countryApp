import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
    return (
        <div>
            <p>This page is not found.</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default NotFound;