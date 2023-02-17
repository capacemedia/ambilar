import React from 'react';
import AMBilar from './AMbilar';
import HowItWorks from './How-it-works';
import FindYourNewCar from './Find-your-new-car';
import Benefits from './Benefits-working-with-us';
import Reviews from './Reviews';
import Contact from './Contact-us';
import { Container } from 'reactstrap';

const additionalProps = [
  { stockParagraph: 'shop' },
  { heading: 'Finde your new car in stock' },
  { stockLittleParagraph: "Large selection of different car types adapted to all life's needs" },
];

function Home() {
  return (
    <>
      <AMBilar />
      <Container>
            <HowItWorks />
            <FindYourNewCar additionalProps={additionalProps} />
            <Benefits />
            <Reviews />
            </Container>
            <Container>
            <Contact />
      </Container>
    </>
  );
}

export default Home;
