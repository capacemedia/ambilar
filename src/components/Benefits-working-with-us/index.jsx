import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BenefitImage1 from '../../assets/Benefits/1.png';
import BenefitImage2 from '../../assets/Benefits/2.png';
import BenefitImage3 from '../../assets/Benefits/3.png';
import BenefitImage4 from '../../assets/Benefits/4.png';

import './style.css';

export default function Benefits() {
  return (
    <div className='benefit_section'>
      <Container>
        <h2 className='section-title stock-heading'>Våra förmåner</h2>

        <Row>
          <Col sm={12} md={6} lg={4} xl={3} className='benefit-card'>
            <div className='benefit-image-content'>
              <img className='benefit_image' src={BenefitImage1} alt='' />
            </div>
            <h5 className='benefit-heading'>En el scooter med på köpet.</h5>
            <p className='benefit_item-text'>
              Vid bilköpet av oss får du en el scooter med på köpet. Tanken med el scootern är att vara miljövänlig och
              åka den vid korta sträckor.
            </p>
          </Col>

          <Col sm={12} md={6} lg={4} xl={3} className='benefit-card'>
            <div className='benefit-image-content'>
              <img className='benefit_image' src={BenefitImage2} alt='' />
            </div>
            <h5 className='benefit-heading'>Verkstads och reservdels rabatt</h5>
            <p className='benefit_item-text'>
              Ni får rabatt hos alla våra samarbetspartners såsom verkstäder och reservdelsbutiker.
            </p>
          </Col>

          <Col sm={12} md={6} lg={4} xl={3} className='benefit-card'>
            <div className='benefit-image-content'>
              <img className='benefit_image' src={BenefitImage3} alt='' />
            </div>
            <h5 className='benefit-heading'>Video presentation</h5>
            <p className='benefit_item-text'>
              Vid önskemål kan bilarna visas med video samtal och vi går igenom bilen tillsammans online.
            </p>
          </Col>

          <Col sm={12} md={6} lg={4} xl={3} className='benefit-card'>
            <div className='benefit-image-content'>
              <img className='benefit_image' src={BenefitImage4} alt='' />
            </div>
            <h5 className='benefit-heading'>Leverans</h5>
            <p className='benefit_item-text'>Bilarna kan levereras runt om i hela Sverige.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
