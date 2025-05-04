import React from 'react'
import Navbar from '../organism/Navbar'

const DashboardTemplate = ({ user, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
    <Navbar user={user} />
    <main className="p-6 bg-gray-100 flex-1">{children}</main>
  </div>
  )
}

export default DashboardTemplate