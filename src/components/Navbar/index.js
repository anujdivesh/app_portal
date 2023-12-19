import React from 'react';
import {
  Nav,
  NavLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
          <img src={require('../../images/spx.png')} alt='logo' style={{width:"70px", height:"40px",marginTop:"-2px", paddingLeft:'5px'}}/>
        <NavLink to='/ocean' style={{color:"white", fontWeight:"bold", fontSize:"16px", paddingLeft:'35%',fontFamily:"'Arial Narrow Bold', sans-serif"}}>
        Ocean Prediction and Monitoring Portal
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
