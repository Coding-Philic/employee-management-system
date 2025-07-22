import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import Listoftask from '../TaskList/Listoftask'

const EmployeDashBoard = () => {
  return (
    <div className='p-15 h-screen w-screen'>
        <Header />
        <TaskListNumber />

         <Listoftask />
        
      </div>
   
  )
}

export default EmployeDashBoard
