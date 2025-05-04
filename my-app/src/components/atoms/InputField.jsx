import React from 'react'

const InputField = ({ placeholder, value, onChange }) => {
    return (
        <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    )
}

export default InputField