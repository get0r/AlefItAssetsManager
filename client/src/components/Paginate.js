import React, { useState } from 'react';

const Paginate = ({ component: Component, totalPages, searchTerm }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const activePageBtnClass = 'bg-indigo-50 border-indigo-500 text-indigo-600';
    const normalBtnClass = 'z-10  relative inline-flex items-center px-4 py-2 border text-sm font-medium'
    const dormantBtnClass = 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50';

    const onPageChange = (page) => {
        if(page < totalPages && page > 0)
            setCurrentPage(page);
    }

    const renderPageNav = () => {
        const pageNav = [];
        for(let i = 1; i <= totalPages; i++) {
            pageNav.push(<button onClick={() => onPageChange(i)} className={currentPage === i ? `${activePageBtnClass} ${normalBtnClass}` : `${dormantBtnClass} ${normalBtnClass}`}>{i}</button>)
        }
        return pageNav;
    }

    return (
        <div>
            <Component page={currentPage} searchTerm={searchTerm}/>

            <div className="bg-gray-200 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                    <button onClick={() => onPageChange(currentPage + 1 )} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Previous
                    </button>
                    <button  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <button onClick={ () => onPageChange(currentPage-1) } className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-200">
                                <span className="sr-only">Previous</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {
                                renderPageNav()
                            }
                            <button onClick={ () => onPageChange(currentPage+1) } className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-200">
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Paginate;
