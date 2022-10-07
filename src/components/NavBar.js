import React from 'react'
import { NavLink} from "react-router-dom"

function NavBar() {
  return (
    <nav className='nav'>
      <h1 className='navh1'>Blossom-Plant Identification</h1>  
      <div className='nav-list'>
       <ul>
       <NavLink to='/'><li>Home</li>
       </NavLink>

       <NavLink to='/plantcare'><li>PlantCare</li>
       </NavLink>

       <NavLink to='/plantfamily'><li>PlantFamily</li>
       </NavLink>

       <NavLink to='organisation'><li>Organisation</li>
       </NavLink>
   
       </ul>
   </div>
  </nav>
  )
}

export default NavBar