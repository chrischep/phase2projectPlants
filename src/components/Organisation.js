import React from 'react'
import { organisation } from "../data"
function Organisation() {

    const organisationList = organisation.map((organisation) => (
        <div key={organisation.name} >
          <h2>{organisation.name}</h2>
          <ul>
            {organisation.examples.map((examples) => (
            <li key={examples} >{examples}</li>
          ))}</ul>
        </div>
      ))


  return (
    <div>
        <h1>Organisation Page</h1>
        {organisationList}
    </div>
  )
}

export default Organisation