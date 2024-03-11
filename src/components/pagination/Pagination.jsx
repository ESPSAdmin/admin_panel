
    import React, { useEffect, useState } from 'react';

    const Pagination = ({ productsPerPage, totalProducts, currentPage, handlePageChange }) => {
        const pageNumber = [];  
        const [savedPage, setSavedPage] = useState(1);

        useEffect(() => {
            const savedPageString = sessionStorage.getItem('currentPage');
            if (savedPageString) {
                setSavedPage(parseInt(savedPageString));
            } else {
                setSavedPage(1); // Default to page 1 if no saved page is found
            }
        }, []);

        useEffect(() => {
            sessionStorage.setItem('currentPage', currentPage.toString()); // Store as string
            setSavedPage(currentPage); // Update savedPage state
        }, [currentPage]);

        for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
            pageNumber.push(i);
        }

        const totalPages = Math.ceil(totalProducts / productsPerPage);

        return (
            <nav className='navbar py-4'>
                <ul className='nav gap-2 items-center'>
                    <li className='me-5'>Page {currentPage} of {totalPages}</li>
                    {pageNumber.map((number) => (
                        <li key={number} className='nav-item'>
                            <button
                                className={`btn fw-bold ${savedPage === number ? 'activeLink text-dark' : 'text-dark bg-[#f9f1e7]'}`}
                                onClick={() => handlePageChange(number)}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    };

    export default Pagination;