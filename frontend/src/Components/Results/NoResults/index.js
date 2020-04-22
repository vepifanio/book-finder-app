import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import './style.css';

export default function NoResults(){
    return(
        <>
            <h1 className="no-results">No Results Found</h1>
            <Link to={'/'} className="page main">
                <FaChevronLeft size={18} color="#A1ACB3" />
                <p>Back to Search Page</p>
            </Link>
        </>
    );
}