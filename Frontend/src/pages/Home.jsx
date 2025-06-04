import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url("./assets/uber_image.jpg")] h-screen w-full flex justify-between flex-col bg-red-400 pt-3'>
            <img src="https://cdn.freebiesupply.com/images/large/2x/uber-logo-black-transparent.png" alt="uber-logo" className='w-16 h-16 ml-4' />
            <div className='bg-white w-full py-7 px-10 flex flex-col items-center gap-3'>
                <h2 className='font-bold text-3xl '>Start with Uber</h2>
                <Link to={'/user-login'} className='flex items-center justify-center bg-black w-full text-white rounded-md p-3 font-semibold font-serif text-xl'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home;