import React from 'react'
import reactLogo from './../../assets/react.svg'
import viteLogo from './../../../public/vite.svg'
const Corrousel = () => {
  return (
<div className='col-md-6 col-lg-6 col-sx-3 text-center mx-auto p-1'>
    <h2>Popular Mytynerary</h2>
<div id="carousel" className="carousel slide " data-bs-touch="false" data-bs-interval="false">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
    <div className="carousel-inner">
      <div className="carousel-item active ">
        <img src={viteLogo} className=" w-50 rounded-fit "  alt="..." />
        <img src={viteLogo} className=" w-50 rounded-fit "  alt="..." />
        <img src={viteLogo} className=" w-50 rounded-fit "  alt="..." />
        <img src={viteLogo} className=" w-50 rounded-fit "  alt="..." />
      </div>
      <div className="carousel-item">
        <img src={reactLogo} className=" w-50 rounded-fit "  alt="..." />
        <img src={reactLogo} className=" w-50 rounded-fit "  alt="..." />
        <img src={reactLogo} className=" w-50 rounded-fit "  alt="..." />
        <img src={reactLogo} className=" w-50 rounded-fit "  alt="..." />
      </div>
      <div className="carousel-item">
        <img src={viteLogo} className=" w-50 rounded-fit "  alt="..." />
        <img src={reactLogo} className=" w-50 rounded-fit "  alt="..." />
        <img src={reactLogo} className=" w-50 rounded-fit "  alt="..." />
        <img src={viteLogo} className=" w-50 rounded-fit "  alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
    
  )
}

export default Corrousel