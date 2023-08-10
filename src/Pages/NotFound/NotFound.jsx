import React from 'react'
import imgF from '../../../public/notfount.png'
const NotFound = ({} ) => {
  return (
    <div className='nF d-flex justify-content-center'>
      <img className="not img-fluid"src={imgF} alt="Not fount" />
    </div>
  )
}

export default NotFound