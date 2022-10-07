import React, { useState } from 'react'
import PlantList from './PlantList'

function Home({plants,onAddNew}) {
  const [formdata,setformdata]=useState({
    name:"",
    imageUrl:"",
    description:""
  })
   const plantlist=plants.map(plant=>
    { 
      return <PlantList
      key={plant.id} name={plant.name} imageUrl={plant.imageUrl} description={plant.description}
      />

    })
    function handleChange(e){
      setformdata({...formdata, [e.target.name]:e.target.value})

    }
    function handleSubmit(e){
      e.preventDefault()
      // console.log(JSON.stringify(formdata))
      fetch('http://localhost:5000/plants',
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Application":"application/json"
        },
        body:JSON.stringify(formdata)
}
      )
      .then(res=>res.json())
      .then(data=>{
        onAddNew(data)
        // setformdata({...formdata,
        //   name:"",
        //   imageUrl:"",
        //   description:""
        // })
      })
    }
  


  return (
    <div>
      <div className="form">
    <h2>Upload plant here</h2>
    <div className="container">
        <form id="plant-form" onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value={formdata.name} onChange={handleChange}/>
            <label for="name">Image URL</label>
            <input type="text" id="image_url" name="imageUrl" value={formdata.imageUrl} onChange={handleChange}/>
            <label for="description">Description</label>
            <input id="description" name="description" value={formdata.description} onChange={handleChange}/>
            <button id="btn" type="submit">Add plant</button>
        </form>
    </div>
    </div>
      <ul>
        {plantlist}
      </ul>
    </div>
  )
  
}

export default Home