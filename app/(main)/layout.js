import React from 'react'
import DashboardProvider from './provider'

function DashboardLayout({ children }) {
  return (
       <div>
          <DashboardProvider>
            <div className='p-3'></div>
            {children}
          </DashboardProvider>
        </div>
  )
}

export default DashboardLayout