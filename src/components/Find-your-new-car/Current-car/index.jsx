import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Benefits from '../../Benefits-working-with-us';
import Reviews from '../../Reviews';
import Contact from '../../Contact-us';
import ShowInterest from './show-interest';
import ImageVideoGallery from '../Image-gallery';

import '../style.css';

export default function CurrentCar(props) {
  const carInfo = props.location.state;
  window.scrollTo(0, 0);

  return (
    <>
      <Container className='current-car-container'>
        <div className='stock-heading' style={{marginBottom: 0}}>
          <Row>
            <Col md='8'>
              <h2 className='section-title stock-heading current-car-title'>{carInfo.info}</h2>
            </Col>
            <Col md='4'>
              <p className='car-price current-car-price'>
                {carInfo.price} {carInfo.currencyISO}
              </p>
            </Col>
          </Row>
        </div>

        <ImageVideoGallery />
        <Row className='description-car-row'>
          <Col sm='7'>
            <p>{carInfo.description}</p>
          </Col>
          <Col>
            <Row>
              <Col className='car-details-col'>
                <p className='car-details'>Gearbox</p>
                <p style={{ fontSize: '26px', textTransform: 'capitalize' }}>Gas</p>

                <p className='car-details'>Mileage</p>
                <p style={{ fontSize: '26px', textTransform: 'capitalize' }}>3 790</p>
              </Col>
              <Col>
                <p className='car-details'>Fuel</p>
                <p style={{ fontSize: '26px', textTransform: 'capitalize' }}>Automatic</p>
                <p className='car-details'>Model year</p>
                <p style={{ fontSize: '26px', textTransform: 'capitalize' }}>2018</p>
              </Col>
            </Row>
          </Col>
          <ShowInterest />

        </Row>
        <Benefits />
        <Reviews />
      </Container>
      <Contact />
    </>
  );
}
