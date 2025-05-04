import React from 'react'

const Drawer = ({ isOpen, onClose, children }) => {
    return (
        <>
        {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={onClose}></div>
        )}
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4">
            <button className="mb-4 text-red-500" onClick={onClose}>Close</button>
            {children}
        </div>
        </div>
    </>
    )
}

export default Drawer