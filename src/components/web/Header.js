import React, {Component} from 'react';
import BurgerMenu from './BurgerMenu';
import Button from '../essentials/Button';
// import '../../stylesheets/Header.scss';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="header_wrapper">
          <a className='h-left animate' href='#slider' hidden>
            <img className='h-logo' src={require('../../assets/images/logo.png')} alt='Logo'/>
          </a>
          
          <div className='h-right'>
            
            <div id='hamburger-list'>   
              <Button link="#about" text="ÜBER UNS"/>
              <Button link="#service" text="LEISTUNGEN" />
              <Button link="#credentials" text="REFERENZEN" />
              <Button link="#contact" text="KONTAKT" />
            </div>
            <BurgerMenu/>
          </div>
        </div>
      </header>
    )
  }

}

export default Header;