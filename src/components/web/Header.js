import React, {Component} from 'react';
import '../../stylesheets/Header.css';

class Header extends Component {

  render() {
    return (
      <header>
        <a className='h-left animate' href='#slider' hidden>
          <img className='h-logo' src={require('../../assets/images/logo.png')} alt='Logo'/>
        </a>
        <div className='h-right'>
          <label htmlFor='checkbox'>&#9776;</label>
          <input type='checkbox' id='checkbox'/>
          <ul id='hamburger-list'>
            <li>
              <a href='#about'>ÜBER&nbsp;UNS</a>
            </li>
            <li>
              <a href='#services'>LEISTUNGEN</a>
            </li>
            <li>
              <a href='#credentials'>REFERENZEN</a>
            </li>
            <li>
              <a href='#contact'>KONTAKT</a>
            </li>
          </ul>
        </div>
      </header>
    )
  }

}

export default Header;