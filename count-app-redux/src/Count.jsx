import React from 'react'

function Count() {
  return (
    <>
    <h1 className='text-danger fw-bolder text-center mt-5'>Counter-Application</h1>
    <div className="container border mt-5 p-5 ">
    <h1 className='fw-bolder text-center mt-5 ' style={{fontSize:"50px"}}>0</h1>
    <div className="d-flex justify-content-evenly align-item-center">
    <button className='btn btn-success'>Increment</button>
    <button className='btn btn-danger'>Reset</button>
    <button className='btn btn-warning'>Decrement</button>
    </div>
    <div className="d-flex mt-5">
        <input type="text" className='form-control' placeholder='Enter Amount to be Incremented' />
        <button className='btn btn-primary ms-3'>Increment Amount</button>
    </div>
    </div>
    </>
  )
}

export default Count
