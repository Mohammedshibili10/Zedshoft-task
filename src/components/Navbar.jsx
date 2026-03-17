import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import Sidebar from './Sidebar'

export default function Navbar({setSidebarOpen}) {

  
  return (
    <div> 
      <div className="w-full h-16 bg-white flex items-center justify-between px-4 md:px-10 shadow sticky top-0 z-40">
          <div className="flex items-center gap-3">
           <Menu className='md:hidden' onClick={()=>setSidebarOpen(prev => !prev)}/>
            <h1 className="font-bold text-xl">Dashboard</h1>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-gray-700">Welcome, User</span>
          </div>
        </div>
        </div>
  )
}
