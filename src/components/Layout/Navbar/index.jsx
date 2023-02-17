import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import './style.css';
import { Link } from 'react-router-dom';
import HeaderBrand from '../../../assets/header_brand.svg';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand='md'>
        <Link className='navbar-brand' to='/'>
          <img className='nav-logo' src={HeaderBrand} alt='brand' />
        </Link>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link onClick={() => isOpen ? toggle() : ''} className='nav-link' to='/'>
                Hem
              </Link>
            </NavItem>
            <NavItem>
              <Link onClick={() => isOpen ? toggle() : ''} className='nav-link' to='/sell-car'>
                Sälj din bil
              </Link>
            </NavItem>
            <NavItem>
              <Link onClick={() => isOpen ? toggle() : ''} className='nav-link' to='/catalog'>
                Bilar i lager
              </Link>
            </NavItem>
            <NavItem>
              <Link onClick={() => isOpen ? toggle() : ''} className='nav-link' to='/about-us'>
                Om oss{' '}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
