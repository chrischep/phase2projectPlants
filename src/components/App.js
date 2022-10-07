import React, { useEffect, useState } from "react"; 
// import {Route, Router, Switch} from "react-router-dom" 
import {Routes,Route} from "react-router-dom";

import NavBar from "./NavBar"
import Home from "./Home"
import PlantCare from "./PlantCare" 
import PlantFamily from "./PlantFamily"
import Organisation from "./Organisation";
import Footer from "./Footer";

function App() {
  const [plants, setPlants]=useState([])
  useEffect(()=>{
    fetch(' http://localhost:5000/plants')
    .then(res=>res.json())
    .then(data=>setPlants(data))
  },[])
function onAddNew(data){
setPlants([...plants,data])
}
   
  // console.log(plants)
  return (
    <div>
     <NavBar/>
    <Routes>
    <Route path="/" element={<Home plants={plants} onAddNew={onAddNew}/>}/>   
    <Route path="/plantfamily" element={<PlantFamily/>}/>
    <Route path="/plantcare" element={<PlantCare />}/>
    <Route path="/organisation" element={<Organisation />}/>

  
    </Routes>
    {/* <Footer/> */}
     </div>
  )
  
  }

  export default App;
  
