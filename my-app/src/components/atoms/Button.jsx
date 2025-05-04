import React from 'react'

const Button = ({ children, type = "button", variant = "primary", onClick }) => {
    const base = "px-4 py-2 rounded font-medium transition";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
        outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
    };
    
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${variants[variant]}`}
        >
            {children}
        </button>
    );
}

export default Button