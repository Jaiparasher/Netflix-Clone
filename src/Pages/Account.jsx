import React from 'react'
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
     <div className='w-full text-white'>
     <img
      className="w-full h-[400px] object-cover"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/327506e9-f0a6-4ae6-8115-97ea4c94268d/IN-en-20220808-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="/"
    />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
    </div>
     </div>
     <SavedShows/>
    </>
  )
}

export default Account;