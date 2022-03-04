import React from 'react'
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
                      <button className="header-search-button" type="button"> Vacation Properties</button>
                      </li>

                      <li>
                      <Menu menuButton={<MenuButton>Sign Up or Login</MenuButton>} transition>
                        <MenuItem>Sign up</MenuItem>
                        <MenuItem>Login</MenuItem>
                        
                      </Menu>
                      </li>
                  </ul>
              </nav>
      </div>
  </header>
  )

}

export default Header