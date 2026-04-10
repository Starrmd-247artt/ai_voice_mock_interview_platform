import React from 'react'
import DashboardProvider from './provider'

function DashboardLayout({ children }) {
  return (
       <div className="w-screen min-h-screen ">
          <DashboardProvider>
            <div className="w-full px-5"></div>
            {children}
          </DashboardProvider>
        </div>
  )
}

export default DashboardLayout