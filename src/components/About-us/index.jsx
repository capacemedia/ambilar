import React, { useEffect } from 'react';

import { Col, Container, Row } from 'reactstrap';

import AboutUsImage from '../../assets/about-us/about-us-1.png';
import AmbilarCarsImage from '../../assets/car-images/am-bilar-cars.png';

import Benefits from '../Benefits-working-with-us';
import Contact from '../Contact-us';

import './style.css';



export default function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
});

  return (
    <>
      <Container style={{ marginTop: 103 }}>
        <div>
          <h1 className='about-us-heading' style={{ textAlign: 'start' }}>
            Välkommen till AM Bilar{' '}
          </h1>

          <img src={AboutUsImage} alt='' className='about-us-image' />

          <Row className='about-us-content-row'>
            <Col md={6} className='text-col'>
              <p>
                Letar du efter din nästa bil? Vill du sälja din nuvarande bil? Behöver din bil inspektion, reparation
                eller vård? Då är du varmt välkommen att höra av dig till vårt kunniga team för att tillfredsställa alla
                dina behov.
              </p>
              <p>
                Hos oss hittar man personbilar av olika prisklasser och märken till det bästa priset. Alla bilar som
                säljs har genomgått en noggrann marknadsundersökning och säljes endast till det mest relevanta priset.
                Vi köper, säljer och förmedlar alla slags bilar, oavsett märke, modell eller prisklass, så enkelt som
                möjligt.
              </p>
              <p className='for-web'>
                Vill du se bilen genom videosamtal kan du gärna boka tid för en live presentation av bilen. Din nästa
                bil kan även bli levererad hem till dig. Det har aldrig varit så enkelt att köpa eller sälja bil.
              </p>
              <p className='for-web'>
                Finansiering kan ordnas med 0:- kontantinsats. Vi köper gärna din bil. Hör av dig med
                registreringsnummer samt mätarställning så återkommer vi med ett bud. Är du nöjd med budet får du
                pengarna endast inom några minuter efter en testkörning av din bil.
              </p>
              <p className='for-web'>
                Vi erbjuder även service, reparation, felsökning samt mycket mer. Vårt kunniga team tar fram det bästa
                offerten för din bil.
              </p>
              <p className='for-web'>
                -Service
              </p>
              <p className='for-web'>
                -Reparation
              </p>
              <p className='for-web'>
                -Lackering/Rostlagning
              </p>
              <p className='for-web'>
                -Inspektion
              </p>
              <p className='for-web'>
                -Rådgivning
              </p>
              <p className='for-web'>
                Besöksadress: Ivarshyttevägen 12, Hedemora
              </p>
            </Col>
            <Col md={6}>
              <img className='about-us-image' src={AmbilarCarsImage} alt='' />
            </Col>
            <Col md={6} className='for-mobile text-col'>
              <p>
                Vill du se bilen genom videosamtal kan du gärna boka tid för en live presentation av bilen. Din nästa
                bil kan även bli levererad hem till dig. Det har aldrig varit så enkelt att köpa eller sälja bil.
              </p>
              <p>
                Finansiering kan ordnas med 0:- kontantinsats. Vi köper gärna din bil. Hör av dig med
                registreringsnummer samt mätarställning så återkommer vi med ett bud. Är du nöjd med budet får du
                pengarna endast inom några minuter efter en testkörning av din bil.
              </p>
              <p>
                Vi erbjuder även service, reparation, felsökning samt mycket mer. Vårt kunniga team tar fram det bästa
                offerten för din bil.
              </p>
              <p>
                -Service
              </p>
              <p>
                -Reparation
              </p>
              <p>
                -Lackering/Rostlagning
              </p>
              <p>
                -Inspektion
              </p>
              <p>
                -Rådgivning
              </p>
              <p>
                Besöksadress: Ivarshyttevägen 12, Hedemora
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <Benefits />
      <Contact />
    </>
  );
}
