import React, { Component } from 'react';

class NavBar extends Component{
    render(){
      return(
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">RecipeLk
        &nbsp;
        <img
        src="https://wallpaperaccess.com/full/629233.jpg"
        height="40"
        alt="Home"
        />
        </a>
        
        
       
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>

            </li>
            <li className="nav-item">
              <a className="nav-link" href="/list">List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown 
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      )   
      
    }
  }
  export default NavBar;