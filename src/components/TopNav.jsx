import React from 'react'

const TopNav = () => {
  return (
    <div className="  flex justify-between h-16 z-100">
      <h1 className='text-2xl font-semibold p-4 text-zinc-400 tracking-wide'>Gemini</h1>
      <div className='flex gap-6 mx-10 my-4'>
        <h1 className='text-zinc-400 font-semibold mt-1 text-lg'>Try Gemini Advanced</h1>
        
        {/* Login button huncha */}
        <i className="ri-account-circle-fill text-3xl  text-zinc-400"></i>
      </div>
    </div>
  );
}

export default TopNav