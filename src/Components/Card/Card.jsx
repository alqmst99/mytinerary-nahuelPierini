import React from 'react'

const Card = () => {
  return (
    <div className=" text-center">
      <h2>Find Tour Destiny </h2>
      <div className="card mb-3">
        <div className="card-body col-md-12 col-lg-12 col-sx-6">
          <div className="col-md-8 col-lg-12 col-sx-6">

            <p className="card-text">Discover the allure of a captivating metropolis. Unveil hidden treasures and vibrant culture.
              Embark on a journey to find the essence of a city that enchants your wanderlust. Let curiosity guide your search for the ultimate urban adventure.</p>
            <button className='btn btn-primary' onClick={() => {
              alert('comming soon, the pagen is maintence')
            }}>GO! Your Destiny</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card