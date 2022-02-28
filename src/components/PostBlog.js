import React, { useState } from 'react'
import app from './fire'
import { doc, setDoc ,addDoc , getFirestore ,collection } from "firebase/firestore";
import $ from 'jquery'

function PostBlog() {

    const [title , settitle] = useState('');
    const [desc , setdesc] = useState('');

    const db = getFirestore(app);

    const AddBlogs = async() =>{

    try {
        const docRef = await addDoc(collection(db, "blogs" ),{
        title: title,
        desc: desc,
      })}
      catch(error){
          console.log(error)
      }
      settitle('');
      setdesc('');
    }

  return (
    <div className='p-5 bg-gray-600 flex-col'>
        <input className='border-solid border-b m-auto border-b-black w-1/2 rounded-md focus:border-b-2 outline-none' type='text' name='title' id='title' placeholder='title' value={title} onChange={e => settitle(e.target.value)}></input><br></br>
        <textarea className='border-solid border-b border-b-black w-1/2 mt-3 rounded-md focus:border-b-2 outline-none'  name='title' id='title' placeholder='description'value={desc} onChange={e => setdesc(e.target.value)}></textarea><br></br>
        <button className='p-2 m-auto bg-white rounded-md' onClick={AddBlogs}>post</button>
    </div>
  )
}

export default PostBlog