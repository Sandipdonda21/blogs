import React from 'react'
import $ from 'jquery'

function RegistrationPage() {

    $('document').ready(function(){
        $('button').click(function(e){
            e.preventDefault();
            if($('#name').val()==''&&$('#email').val()==''&&$('#mno').val()==''&&$('#password').val()==''){
                alert('please fill all details')
            }
            else{
                alert('form subitted successfully!')
            }
        })
    })
    
  return (
    <div className='flex justify-center my-auto'>
        <div className='border border-gray-300 rounded-sm p-4 w-1/5'>
            <h3 className='font-bold'>Registration page</h3>
            <form className='flex-col flex'>
                <lable className='text-sm'>Name</lable>
                <input type='text'id='name' name='name' className='border-2 border-gray-400' required></input>
                <lable className='text-sm'>Email ID</lable>
                <input type='email' id='email' name='email' className='border-2 border-gray-400' required></input>
                <lable className='text-sm'>Mobile No</lable>
                <input type='text'id='mno' name='name' className='border-2 border-gray-400' required></input>
                <lable className='text-sm'>Password</lable>
                <input type='password' id='password' name='password' className='border-2 border-gray-400' required></input>
                <button className='text-white font-semibold bg-sky-500 w-full py-1 text-center mt-3' >Register</button>
            </form>
        </div>
    </div>
  )
}

export default RegistrationPage