import React from 'react'
// import SearchBar from './SearchBar'

import { Link } from 'react-router-dom'
// import RegistrationForm from './RegistrationForm'
import Login from './Login'

// import Home from '../pages/Home'
// import Properties from '../pages/Properties'
// import About from '../pages/About'
function Navbar() {
  // const data = ['Properties', 'rent', 'buy', 'lease', 'hyderabad'];
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  <div class="container-fluid">
    <a class="navbar-brand" href='*'>

    <i class="fa fa-home" aria-hidden="true" style={{fontSize:'45px',color:'#055866'}}></i>

    

    <span style={{color:'slategray',fontFamily:'fantasy',fontSize:'25px'}}>LiviN</span>
    <span style={{color:'rgb(255, 45, 127)',fontFamily:'cursive',fontSize:'35px'}}>Estate</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      
    <div class="collapse navbar-collapse" id="navbarColor03"></div>
       
   {/* <div class="d-flex">
    <fo class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search" style={{width:'500px'}}></input>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search </button>
      </fo rm>
</div> */}
      

      <div class='flex-grow-1'></div>
      
      <ul class="navbar-nav me-auto">
        <li class="d-flex justify-content-center">
          <Link  class="nav-link active" href="#" to="/"   >Home </Link>
        </li>
        <li class="d-flex justify-content-center">
          <Link class="nav-link" href="#" to="/Lands"></Link>
        </li>
         

        <li class="d-flex justify-content-center" >
          <Link class="nav-link" href="#" to="/Buy">Properties</Link>
        </li>
        <li class="d-flex justify-content-center" >
          <Link class="nav-link" href="#" to="/About">About</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
  <div style={{marginRight:30}}>
  
    
    </div>
    <div style={{marginRight:100}}>  
       <Login />
    </div>
</nav>

    </div>
  )
}
export default Navbar;
 