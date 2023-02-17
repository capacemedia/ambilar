import React from 'react';
import { Container } from 'reactstrap';
import Benefits from '../Benefits-working-with-us';
import Reviews from '../Reviews';
import Contact from '../Contact-us';

import './style.css';

export default function Catalog() {
  return (
    <>
      <Container className='catalog-container'>
        <iframe
          title='ambilar-cars'
          id='bilonlineiframe'
          src='https://ambilar.bilonline.se/sida/?s=0'
          frameborder='0'
          scrolling='no'
        ></iframe>

        {/* <FindYourNewCar catalogType={'stock'} heading='Catalog'/> */}
        <Benefits />
        <Reviews />
      </Container>
      <Contact />
    </>
  );
}
