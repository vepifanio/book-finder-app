import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import './style.css';


export default function Search() {
    const [search, setSearch] = useState('');

    return(
        <div className="search-container">
            <h1>Book Finder App</h1>

            <div className="search-input">
                <input 
                    type="text"
                    placeholder="Ex.: Title, Author, etc..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />

                <Link to={`/search?q=${search}`}  className="button">
                    <FaSearch size={24} color="#A1ACB3" />
                </Link>
            </div>
        </div>
    );
};