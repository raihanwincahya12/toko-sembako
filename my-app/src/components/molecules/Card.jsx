import React from 'react'

const Card = ({ title, children, bgColor = "bg-white"  }) => {
  return (
    <div className={`p-4 rounded-xl shadow ${bgColor}`}>
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  )
}

export default Card