import React from 'react';
import { Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import HowItWorksImage1 from '../../assets/how-it-works/1.png';
import HowItWorksImage2 from '../../assets/how-it-works/2.png';
import HowItWorksImage3 from '../../assets/how-it-works/3.jpg';
import './style.css';

export default function HowItWorks() {
  const history = useHistory();

  const handleValuation = () => {
    history.push({
      pathname: '/sell-car',
    });
  };
  return (
    <section className='how-it-works-sections'>
      <h5 className='paragraph'>Hur det funkar</h5>
      <h2 className='section-title stock-heading'>
        Vill du sälja din bil? <br />
        Vi gör det enkelt!
      </h2>
      <Row className='how-it-works-row first'>
        <Col md={7} className='how-it-works-card-image'>
          <img src={HowItWorksImage1} alt='first' />
        </Col>
        <Col md={5} className='how-it-works-card how-it-works-card-first'>
          <h5 className='how-it-works-card-step-title'>Steg 1</h5>
          <h3 className='how-it-works-card-title'>Lära känna varandra. Skicka in bilens registreringsnummer</h3>
          <p className='how-it-works-card-text'>
            Första steget består av att vi tittar på bilens historik och värderar den utifrån marknaden och de uppgifter
            vi har om bilen.
          </p>
        </Col>
      </Row>
      <Row className='how-it-works-row second'>
        <Col md={7} className='how-it-works-card how-it-works-card-second'>
          <h5 className='how-it-works-card-step-title'>Steg 2</h5>
          <h3 className='how-it-works-card-title'>Du får ditt bästa bud.</h3>
          <p className='how-it-works-card-text'>
            Efter att vi är klara med värderingen skickar vi ut den till dig och erbjudandet är giltig i 14 dagar.
          </p>
        </Col>
        <Col md={5} className='how-it-works-card-image'>
          <img style={{ objectFit: 'cover' }} src={HowItWorksImage2} alt='second' />
        </Col>
      </Row>
      <Row className='how-it-works-row first'>
        <Col md={7} className='how-it-works-card-image'>
          <img src={HowItWorksImage3} alt='second' />
        </Col>
        <Col md={5} className='how-it-works-card how-it-works-card-first'>
          <h5 className='how-it-works-card-step-title'>Steg 3</h5>
          <h3 className='how-it-works-card-title'>Visning och betalning</h3>
          <p className='how-it-works-card-text'>
            Du är välkommen och visa upp bilen på en liten inspektion som tar ungefär 10 minuter. Efter den får du
            betalningen på ditt konto.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4} style={{ padding: 0 }}>
          <button className='btn btn-danger btn-valuation' onClick={handleValuation}>
            Få gratis värdering{' '}
          </button>
        </Col>
      </Row>
    </section>
  );
}
