import React from 'react'
import Avatar from '../atoms/Avatar'

const Navbar = ({ user }) => {
    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{user.name}</span>
            <Avatar src={user.avatar} alt={user.name} size="sm" />
        </div>
        </nav>
    )
}

export default Navbar