import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light headernav">



    <div className="navbar-brand">
      {/* <img
        alt=""
        src=""
        width="30"
        height="30"
        className="d-inline-block align-top"
      /> */}
      <div className="brand-text"><h1>HAVVKA</h1></div>
    </div>
    <div className="nav-left">
      <Navbar/></div>
        </div>
    );
}

export default Header;
