import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex screen mt-10 justify-between gap-5 '>

     <div className='w-[40%] px-9 py-6 rounded-xl bg-red-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
     <h3 className='text-xl font-medium'>Newtask</h3>
        </div> 
     <div className='w-[40%] px-9 py-6 rounded-xl bg-blue-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
     <h3 className='text-xl font-medium'>Newtask</h3>
        </div> 
     <div className='w-[40%] px-9 py-6 rounded-xl bg-green-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
     <h3 className='text-xl font-medium'>Newtask</h3>
        </div> 
     <div className='w-[40%] px-9 py-6 rounded-xl bg-yellow-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
     <h3 className='text-xl font-medium'>Newtask</h3>
        </div> 
     
    </div>
  )
}

export default TaskListNumber
