import React from 'react'
import $ from 'jquery'

function TableData(props) {

    $('document').ready(function(){let list ='' ;
        console.log(props.value)
        props.value.map((e)=>{
            list += `<tr>
                        <td>${e.Id}</td>
                        <td>${e.fname}</td>
                        <td>${e.lname}</td>
                        <td>${e.email}</td>
                        <td>${e.phone}</td>
                    </tr>
            `
        })
        document.getElementById('tablebody').innerHTML = list;})

  return (
    <div className='w-full'>
        <table className='w-full'>
            <tr className='w-full'>
                <th className='text-left' >ID</th>
                <th  className='text-left' >FIRST NAME</th>
                <th  className='text-left'>LAST NAME</th>
                <th  className='text-left'>EMAIL</th>
                <th  className='text-left'>PHONE</th>
            </tr>
            <tbody  id='tablebody'>
                s
            </tbody>
        </table>
    </div>
  )
}

export default TableData