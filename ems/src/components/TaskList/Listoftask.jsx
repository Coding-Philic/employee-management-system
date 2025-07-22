import React from 'react'

const Listoftask = () => {
  return (
  <div id='tasklist' className='h-[55%] overflow-x-auto w-full  py-5 flex items-center justify-start gap-5 flex-nowrap'>
     <div className='h-full w-[300px] shrink-0 p-5 bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>high</h3>
        <h4 className='font-sm'>4/5/2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-bold'>make a project</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam incidunt possimus molestias sit id quod laudantium autem doloremque veniam! </p>
     </div>

      <div className='h-full w-[300px] shrink-0 p-5 bg-green-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>high</h3>
        <h4 className='font-sm'>4/5/2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-bold'>make a project</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam incidunt possimus molestias sit id quod laudantium autem doloremque veniam! </p>
     </div>

      <div className='h-full w-[300px] shrink-0 p-5 bg-yellow-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>high</h3>
        <h4 className='font-sm'>4/5/2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-bold'>make a project</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam incidunt possimus molestias sit id quod laudantium autem doloremque veniam! </p>
     </div>

      <div className='h-full w-[300px] shrink-0 p-5 bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>high</h3>
        <h4 className='font-sm'>4/5/2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-bold'>make a project</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam incidunt possimus molestias sit id quod laudantium autem doloremque veniam! </p>
     </div>
     
     
    </div>
  )
}

export default Listoftask
