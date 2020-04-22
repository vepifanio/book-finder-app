import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import api from '../../services/api';

import defaultImage from '../../assets/nothasimage.png';

import './style.css';

export default function Results() {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const { search } = useLocation();
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {

            try {
                const query = `${search}&page=${page}`;
                const { data: { data } } = await api.get(`books${query}`);

                setBooks(data.items);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        
        fetchData();

    }, [search, page]);

    return(
        <div className="results-container">
            <h1>Search Results</h1>

            {isLoading 
                ? 
                <h1>Loading...</h1>
                :
                <>
                    {books === undefined
                        ? 
                        history.push('/search/no-results')
                        : 
                        <>
                            <Link to={'/'} className="page main">
                                <FaChevronLeft size={18} color="#A1ACB3" />
                                <p>Back to Search Page</p>
                            </Link>

                            <div className="results">
                                {books.map(book => (
                                    <div key={book.id}
                                        className="result"
                                    >
                                        <img 
                                            src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : defaultImage} 
                                            alt={book.volumeInfo.title}
                                        />
                                        <div className="info">
                                            <p className="title"><strong>Title: </strong>{book.volumeInfo.title}</p>
                                            <p><strong>Authors: </strong>
                                                {book.volumeInfo.authors 
                                                    ?    
                                                    book.volumeInfo.authors.map(
                                                        (author, index) => ( <span key={index} >{author} </span> )
                                                    )
                                                    :
                                                    <></>
                                                }
                                            </p>
                                            <p><strong>Publisher: </strong>{book.volumeInfo.publisher}</p>
                                            <p><strong>Published Year: </strong>{book.volumeInfo.publishedDate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pagination">

                                {page !== 1 && 
                                    <div className="page back" onClick={() => {
                                            setIsLoading(true);
                                            return setPage(page - 1)
                                        }}>
                                        <FaChevronLeft size={18} color="#A1ACB3" />
                                        <p>Previous Page</p>
                                    </div>
                                }

                                <div className="page next" onClick={() => {
                                    setIsLoading(true);
                                    return setPage(page + 1)
                                }}>
                                    <p>Next Page</p>
                                    <FaChevronRight size={18} color="#A1ACB3" />
                                </div>
                            </div>
                        </>
                    }
                </>   
            }
        </div>
    );
};