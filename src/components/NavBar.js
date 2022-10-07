import React from 'react'
import { NavLink} from "react-router-dom"

function NavBar() {
  return (
    <nav className='nav'>
      <h1 className='navh1'>Blossom-Plant Identification</h1>  
      <div className='navlinks'>

  <NavLink to='/'>Home
  </NavLink>

   <NavLink to='/plantcare'>PlantCare
   </NavLink>

   <NavLink to='/plantfamily'>PlantFamily
   </NavLink>

   <NavLink to='organisation'>Organisation
   </NavLink>
   </div>
  </nav>
  )
}

export default NavBar