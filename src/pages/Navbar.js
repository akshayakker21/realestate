// //import React from 'react'
// // import SearchBar from './SearchBar'
// import React, { useState } from "react";
// import { Link } from 'react-router-dom'
// // import RegistrationForm from './RegistrationForm'
// import Login from './Login';
// import './navbar.css';

// // import Home from '../pages/Home'
// // import Properties from '../pages/Properties'
// // import About from '../pages/About'
// export const Navbar=()=> {
//   const[menuOpen, setMenuOpen]=useState(false);
//   // const data = ['Properties', 'rent', 'buy', 'lease', 'hyderabad'];
//   return (
//     <div>

// <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href='*'>

//     <i class="fa fa-home" aria-hidden="true" style={{fontSize:'45px',color:'#055866'}}></i>

    

//     <span style={{color:'slategray',fontFamily:'fantasy',fontSize:'25px'}}>LiviN</span>
//     <span style={{color:'rgb(255, 45, 127)',fontFamily:'cursive',fontSize:'35px'}}>Estate</span>
//     </a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarColor03">
      
//     <div class="collapse navbar-collapse" id="navbarColor03"></div>
       
//    {/* <div class="d-flex">
//     <fo class="d-flex">
//         <input class="form-control me-sm-2" type="search" placeholder="Search" style={{width:'500px'}}></input>
//         <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search </button>
//       </fo rm>
// </div> */}
      
     
//       <div class='flex-grow-1'></div>

//       <Link to="/" className="title">
//         Website
//       </Link>

//       <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
      
//       <ul class="navbar-nav me-auto" className={menuOpen ? "open" : ""}>
//         <li class="d-flex justify-content-center">
//           <Link  class="nav-link active" href="#" to="/"   >Home </Link>
//         </li>
//         <li class="d-flex justify-content-center">
//           <Link class="nav-link" href="#" to="/Lands"></Link>
//         </li>
//         <li class="d-flex justify-content-center" >
//           <Link class="nav-link" href="#" to="/Buy">Properties</Link>
//         </li>
//         <li class="d-flex justify-content-center" >
//           <Link class="nav-link" href="#" to="/About">About</Link>
//         </li>
        
//       </ul>
      
//     </div>
//   </div>
//   <div style={{marginRight:30}}>
  
    
//     </div>
//     <div style={{marginRight:100}}>  
//        <Login />
//     </div>
// </nav>

//     </div>
//   )
// }
// export default Navbar;
 

import React, { useState } from "react";
import Login from "./Login";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
      <i class="fa fa-home" aria-hidden="true" style={{fontSize:'45px',color:'#055866'}}></i>

      <span style={{color:'slategray',fontFamily:'fantasy',fontSize:'25px'}}>LiviN</span>
     <span style={{color:'rgb(255, 45, 127)',fontFamily:'cursive',fontSize:'35px'}}>Estate</span>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Buy">Properties</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Login"><Login /></NavLink>
        </li>
      </ul>
     
    </nav>
  );
};
export default Navbar;
