import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
        <Search/>
        <input type='text' placeholder='Search..'
        className='outline-none'
        />
      </div>
      <div>
        <h2 className='bg-purple-500 p-1 rounded-full text-xs text-white px-2'>🔥 Join Membership just for 99.99 Rs.</h2>
      </div>
    </div>
  )
}

export default Header