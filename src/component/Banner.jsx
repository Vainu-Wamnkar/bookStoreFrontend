import React from 'react'

function Banner() {
  return (
    <div className='px-12'>
        <div className='py-8 flex h-auto'>
            <div className='w-1/2 flex flex-col gap-10 items-start'>
                <h1 className='text-3xl font-bold'>Hello, welcomes here to learn <br /> something <span className='text-pink-500'>New Everyday!!!</span></h1>
                <p className='w-[80%] text-xl'>Books are windows to countless worlds, offering knowledge, imagination, and escape. They allow us to explore new ideas, understand different cultures, and grow as individuals.</p>
                <div>
                    <input type="text" placeholder='Enter your email to ...' className='outline-none p-2 border-2 rounded-sm w-96'/>
                </div>
                <button className='bg-pink-600 rounded-md py-2 px-4 text-white'>Get Started</button>
            </div>
            <div className='w-1/2 '>
                <img src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=" alt="" className='rounded-md ' />
            </div>
        </div>
    </div>

  )
}

export default Banner