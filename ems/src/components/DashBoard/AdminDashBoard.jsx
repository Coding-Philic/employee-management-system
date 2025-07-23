import React from 'react'
import CrateTask from '../other/CrateTask'
import Alltask from '../other/Alltask'
import Header from '../other/Header'

const AdminDashBoard = () => {
  return (
    <div className='h-full w-full bg-zinc-900 p-10'>
  <Header />
 <CrateTask />
 <Alltask />
</div>
  )
}

export default AdminDashBoard
