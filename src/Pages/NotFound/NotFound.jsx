import React from 'react'
import imgF from './../../assets/notfount.png'
const NotFound = ({} ) => {
  return (
    <div className='nF d-flex justify-content-center'>
<i class="fa-solid fa-circle-arrow-left"><Link to='/' className="btn btn-secondary col-4 ">Back</Link></i>

      <img className="not img-fluid"src={imgF} alt="Not fount" />
    </div>
  )
}

export default NotFound