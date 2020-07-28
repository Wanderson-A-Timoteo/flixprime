import React from 'react'
import Logo from '../../assets/img/Logo-flixprime.png'
import './Menu.css'
import Button from '../Button';


function Menu() {
  return(
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='Logo FlixPrime' />
      </a>

      <Button as='a' className='Button' href='/'>
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
