import React from 'react'
import Carrousel from './../../Components/Carrousel/Corrousel'
import Card from './../../Components/Card/Card'
const Container = () => {
  return (
    <div className="conteiner d-inline-block col-12 col-md-12 col-lg-12">
      <Card />
      <Carrousel Cities />
    </div>
  )
}

export default Container