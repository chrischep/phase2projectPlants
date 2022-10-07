import React from 'react'
import { plantfamily } from "../data"


function PlantFamily() {

    const plantfamilyList = plantfamily.map((plantfamily) => (
        <div key={plantfamily.name} >
          <h2>{plantfamily.name}</h2>
          <ul>
            {plantfamily.examples.map((examples) => (
            <li key={examples} >{examples}</li>
          ))}</ul>
        </div>
      ))




  return (
    <div>
        <h1>PlantFamily Page</h1>
        {plantfamilyList}
    </div>
  )
}

export default PlantFamily