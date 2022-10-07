import React from 'react'
import { plantcare } from "../data"

function PlantCare() {

const plantcareList=plantcare.map((plantcare)=>(

    <div key={plantcare.type} >
    <h2>{plantcare.type}</h2>
    <ul>
      {plantcare.genres.map((genres) => (
      <li key={genres} >{genres}</li>
    ))}</ul>
  </div>
))


  return (
      <div>
        <h1>PlantCare Page</h1>
    {plantcareList}
        </div>
  )
}

export default PlantCare