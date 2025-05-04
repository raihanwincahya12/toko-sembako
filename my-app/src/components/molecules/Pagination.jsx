import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages)].map((_, i) => i + 1)
    return (
        <div className="flex flex-wrap gap-2 mt-6">
        {pages.map((page) => (
            <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded ${
                currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            >
            {page}
            </button>
        ))}
        </div>
    )
}

export default Pagination