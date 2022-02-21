import React from 'react';
import HeaderStyle from './HeaderStyle.css';
import Navbar from './Navbar';
import ABMessias from '../Images/ABMessias.png';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className={HeaderStyle}>
      <div className='Hcontainer'>
        <Link to='/'>
        <img src={ABMessias} alt="logo-img" className='logoImg'/>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;