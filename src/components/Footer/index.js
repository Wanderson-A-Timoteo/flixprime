import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo-flixprime.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="Logo FlixPrime" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        Copyright by &nbsp;
        <a href="https://wanderson.ga/">
          Wanderson A. Timóteo
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
