import React from 'react';
import { Col, Row } from 'reactstrap';
import './style.css';
import FacebookIcon from '../../../assets/icons/facebook.svg';
import InstagramIcon from '../../../assets/icons/instagram.svg';
import FooterLogo from '../../../assets/footer_logo.svg';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Row className='footer-row'>
        <Col>
          <ul>
            <li>
              <Link target={"_blank"} to={'//www.blocket.se/butik/am-bilar'}>
                <img src={FooterLogo} alt='footer_logo' />
              </Link>

              <Link target='_blank' to={'//www.facebook.com/ambilar/'}>
                <img src={FacebookIcon} alt='facebook' />
              </Link>
              <Link target='_blank' to={'//www.instagram.com/ambilar.se/?hl=en'}>
                <img src={InstagramIcon} alt='instagram' />
              </Link>
            </li>
            <li>
              <h6 className='all-rights-reserved'>© 2021 AMbilar Technologies, Inc. All rights reserved.</h6>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}
