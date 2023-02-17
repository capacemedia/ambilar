import React, { useState } from 'react';
import './style.css';
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap';
import { Container } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    handleClick();
  });

  return (
    <div className='card-header' type='button' onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

const FAQ = () => {
  const [activeKey, setActiveKey] = useState('');

  const data = [
    {
      text: 'The long barrow was built on land previously inhabited in the Mesolithic period',
      heading: 'How long do payouts take?',
      content: 'The long barrow was built on land previously inhabited in the Mesolithic period',
      id: uuidv4(),
    },
    {
      text: 'The long barrow was built on land previously inhabited in the Mesolithic period',
      heading: 'How long do payouts take?',
      content: 'The long barrow was built on land previously inhabited in the Mesolithic period',
      id: uuidv4(),
    },
    {
      text: 'The long barrow was built on land previously inhabited in the Mesolithic period',
      heading: 'How long do payouts take?',
      content: 'The long barrow was built on land previously inhabited in the Mesolithic period',
      id: uuidv4(),
    },
    {
      text: 'The long barrow was built on land previously inhabited in the Mesolithic period',
      heading: 'How long do payouts take?',
      content: 'The long barrow was built on land previously inhabited in the Mesolithic period',
      id: uuidv4(),
    },
  ];
  return (
    <div style={{ backgroundColor: '#F9F9F9', padding: 20 }}>
      <Container className='faq-container'>
        <h2 className='section-title stock-heading'>Frequently asked questions</h2>
        <Accordion defaultActiveKey={0} activeKey={String(activeKey)}>
          {data.map((item, index) => (
            <Card key={index}>
              <CustomToggle
                as={Card.Header}
                eventKey={index}
                handleClick={() => {
                  if (activeKey === index) {
                    setActiveKey(-1);
                  } else {
                    setActiveKey(index);
                  }
                }}
              >
                <span className='faq-text'>{item.text}</span>
                {activeKey === index ? <span className='faq-suffix'>-</span> : <span className='faq-suffix'> +</span>}
              </CustomToggle>
              <Accordion.Collapse eventKey={String(index)}>
               <>
               <Card.Body>
                 <p>{item.heading}</p>
               
              <p className='faq-content'> {item.content}</p>
               </Card.Body>
               
               </>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};
export default FAQ;
