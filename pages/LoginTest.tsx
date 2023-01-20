import React from 'react'

function LoginTest() {

  

  return (
    <div >
        <div className='text-red-600 text-2xl bg-slate-300 w-fit'>Netflix</div>
        <form action="" className=' space-y-4 mt-28 mx-9'>
          <div className='text-[32px] font-semibold'>Sign In</div>
          <div className='space-y-3'>
            <label htmlFor="" className='w-full inline-block'>
              <input type="email" placeholder='Email' className='w-full rounded 
              py-4 px-3 bg-[#e8f0fe] text-black outline-none'/>
            </label>
            <label htmlFor="" className='w-full inline-block'>
              <input type="password" placeholder='Password' className='w-full rounded py-4 px-3
              bg-[#e8f0fe] text-black outline-none' />
            </label>
          </div>
          <button className='text-[16px] bg-red-500 rounded w-full py-3 opacity-90 
          hover:opacity-100 hover:font-semibold'>
            Sign In
          </button>

          <div className='text-[grey]'>
            New to Netflix? {' '}
            <button className='text-white hover:underline'>Sign Up</button>
          </div>
        </form>

        
    </div>

    
  )
}

export default LoginTest