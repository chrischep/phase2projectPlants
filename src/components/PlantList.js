import React from 'react'

const PlantList=({id,name,imageUrl,description}) =>{
  return (
    <li >
        <img src= {imageUrl}/>
        <div className='content'>
         <h2>{name}</h2> 
         <p>{description}</p>
         </div>
    </li>
        
  )
}

export default PlantList