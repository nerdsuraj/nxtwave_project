import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/nxtwavelogo.png'; 

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-3 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <img src={logo} alt="NXT Wave" className="logo" style={{ height: '40px' }} />
        <Link className="btn btn-success" to="/add">Add Item</Link>
      </div>
    </header>
  );
};

export default Header;
