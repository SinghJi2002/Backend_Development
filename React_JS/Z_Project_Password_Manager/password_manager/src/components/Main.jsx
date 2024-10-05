import React from 'react'

function Main() {
  return (
    <div>
      <div className=' flex flex-col gap-[10px] w-[50%] mx-auto h-[500px] border border-black border-opacity-30 rounded-lg mt-[15px] p-1'>
        <p className='text-center text-2xl font-bold'>
            Your Trusted Password Protector</p>
        <label className='flex flex-col w-[95%] mx-auto text-black text-left gap-[2px]'>
            <p className='font-bold'>Enter Site Name</p>
            <input type="text" className='rounded-full outline-none p-[5px] border border-black border-opacity-25' />
        </label>
        <div className=' flex flex-row mx-auto justify-center gap-[50px]'>
            <label htmlFor="" className=' flex flex-row gap-[10px] items-center'><p className=' text-black font-bold'>Username</p> <input type="text" className='rounded-full outline-none p-[5px] border border-black border-opacity-25' /></label>
            <label htmlFor="" className=' flex flex-row gap-[10px] items-center'><p className=' text-black font-bold'>Password</p> <input type="text" className='rounded-full outline-none p-[5px] border border-black border-opacity-25' /></label>
        </div>
      </div>
    </div>
  )
}

export default Main
