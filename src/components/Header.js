import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/kamehouse.png';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

function Header  () {

  return (
    <header>
      <div className="container">
              <nav>
                
                  <ul>
                      
                    <a href="/">
                    <img src={logo} alt="Resort"/>
                    </a>
                      

                      <li>
                      <form action="" className="header-search-bar"> 
                      <input placeholder='Find Your Resort...' className='search-bar-form-control' type='text' id='search'/>
                      <button className="header-search-button" type="button"> Search</button></form>
                      </li>

                      <li>
                      <Link to = {`/resorts`}>
                      <button className="header-search-button" type="button"> Vacation Properties</button>
                      </Link>
                      </li>

                      <li>
                      <Menu menuButton={<MenuButton>Sign Up or Login</MenuButton>} transition>
                        <Link to = {`/signup`}>
                        <MenuItem>Sign up</MenuItem>
                        </Link>
                        <Link to = {`/login`}>
                        <MenuItem>Login</MenuItem>
                        </Link>
                        
                      </Menu>
                      </li>

                      <li>
                      <Menu menuButton={<MenuButton>Resort Types</MenuButton>} transition>
                        <Link to = {`/condos`}>
                        <MenuItem>Condos</MenuItem>
                        </Link>
                        <Link to = {`/villas`}>
                        <MenuItem>Villas</MenuItem>
                        </Link>
                        <Link to = {`/beach-houses`}>
                        <MenuItem>Beach Houses</MenuItem>
                        </Link>
                        <Link to = {`/hotels`}>
                        <MenuItem>Hotels</MenuItem>
                        </Link>
                      </Menu>
                      </li>
                  </ul>
              </nav>
      </div>
  </header>
  )

}

export default Header