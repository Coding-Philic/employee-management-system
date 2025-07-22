import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center mt-5 mb-5'>
                <div className='text-white'>
                    <h6 className='font-semibold'>Hello,</h6 >
                    <h1 className='text-3xl font-bold'>Adnan ✌</h1>
                </div>
                <div>
                    <button className='bg-orange-700 rounded h-10 w-25 text-white text-lg font-medium'>
                        Log out
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Header
