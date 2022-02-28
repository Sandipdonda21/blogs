import React from 'react'
import { Link ,BrowserRouter as Router } from 'react-router-dom'

function Navbar() {
  return (
     
    <div className='w-full h-12 text-white bg-black flex align-middle justify-center' >
        <ul className='flex justify-around w-1/2'>
            <li className='m-auto text-lg font-mono hover:underline'><Link to='/' >Blogs</Link></li>
            <li className='m-auto text-lg font-mono hover:underline'><Link to='/postblog'>Post blog</Link></li>
        </ul>
    </div>
   
  )
}

export default Navbar