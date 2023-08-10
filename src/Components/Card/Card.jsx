import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="text-center  col-md-12 col-lg-12 col-12">
      <h2>Find Tour Destiny </h2>
      <div className="card mb-3">
        <div className="card-body">
          <div className="">

            <p className="card-text">Discover the allure of a captivating metropolis. Unveil hidden treasures and vibrant culture.
              Embark on a journey to find the essence of a city that enchants your wanderlust. Let curiosity guide your search for the ultimate urban adventure.</p>
            <button className='btn btn-primary'> <a className='text-decoration-none ' href="/nF">GO! Your Destiny</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card