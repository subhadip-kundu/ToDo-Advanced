import React from 'react'

function Update({display}) {
  return (
    <div className=' p-5 d-flex justify-content-center align-items-start flex-column update-form ' >
      <h3 className='text-center fw-medium fs-2 w-100 mb-5 '>Update Your Task</h3>
      <input type="text" className='border-0 my-3 p-3 rounded-1 ' />
      <textarea maxLength="50" type="text" className='border-0 my-3 p-3 rounded-1'></textarea>
      <div className="d-flex gap-3">
        <button className='btn btn-success d-flex  px-4  py-2 align-self-end mt-3'>UPDATE</button>
        <button onClick={() => { display("none"); }} className='btn btn-danger d-flex  px-4  py-2 align-self-end mt-3'>CLOSE</button>
      </div>
    </div>
  )
}

export default Update;