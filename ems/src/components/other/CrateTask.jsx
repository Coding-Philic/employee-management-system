import React from 'react'

const CrateTask = () => {
  return (
    <div>
      <form className='flex justify-between items-center p-5 rounded-xl shadow-xl bg-zinc-800' action="">
     
      <div>
         <div className='flex items-center gap-5'>
        <svg className='h-15 w-10' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="50" cy="50" r="45" stroke="white" stroke-width="5" fill="none" />

  <polyline points="55,30 35,50 55,70" fill="none" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <h1 className='font-bold text-3xl'>Create Task</h1>
      </div>
        <h1 className='text-xl font-semibold mt-10'>Task Title</h1>
        <input className='h-8 w-100 bg-zinc-700 rounded-xl p-2 shadow-inner' type="text" placeholder='eg-Make a UI design' name="title" id="" />
       
        <h1 className='text-xl font-semibold mt-5'>Date</h1>
        <input className='h-8 w-100 bg-zinc-700 p-2 rounded-xl' type="date" />
        <h1 className='text-xl font-semibold mt-5'>Assign To</h1>
        <input className='h-8 w-100 bg-zinc-700 p-2 rounded-xl' type="text" />
        <h1 className='text-xl font-semibold mt-5'>Category</h1>
        <input className='h-8 w-100 bg-zinc-700 p-2 rounded-xl'  placeholder="Design , development etc" type="text" />
  
      </div>
      <div>
         <h1 className='text-xl font-semibold mt-5'>Description</h1>
        <textarea className='block h-50 w-100 bg-zinc-700 resize-none rounded-xl' name="des" id=""></textarea>
            <input className='h-8 w-100 bg-green-300 mt-2 rounded-xl' type="submit" />
      </div>
 </form>
    </div>
  )
}

export default CrateTask
