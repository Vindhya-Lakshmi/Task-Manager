import React from 'react'
import { SIDEBAR_CLASSES } from '../assets/dummy'
import { useState } from 'react'

const Sidebar = (user, tasks) => {

  const [mobileOpen, setMobileOpen] = useState(false)
  const [showModel, setShowModel] = useState(false)

  const totalTasks = tasks?.length || 0
  const completedTasks = tasks?.filter((t) => t.completed).length || 0
  const productivity = totalTasks > 0
  ? Math.round((completedTasks/ totalTasks)*100)
  : 0

  const username = user?.name || "user"
  const initial = username.charAt(0).toUpperCase()

  return (
    <>
    {/*desktop sidebar*/}
    <div className={SIDEBAR_CLASSES.desktop}>
      <div className='p-5 border-b border-purple-100 lg:block hidden'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center 
          justify-center text-white font-bold shadow-md'>
            {initial}
          </div>
          <div>
            <h2 className='text-lg font-bold text-gray-800'>Hey,{username}</h2>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Sidebar