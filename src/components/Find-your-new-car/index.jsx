import React from 'react';

import './style.css';

export default function FindYourNewCar() {
  return (
    <>
     <div style={{ marginBottom: 20, marginTop: 29 }}>
          <h5 className='paragraph'>Galleria</h5>
          <h2 className='section-title stock-heading' style={{ marginBottom: 0 }}>
            Hitta din nya bil hos oss
          </h2>
          <p style={{ fontSize: 16 }}>Stort utbud av bilar</p>
        </div>
        
      <iframe
        title='last-updated-cars'
        id='bilonlineiframe'
        src='https://ambilar.bilonline.se/sida/?s=1&customeriframe=http://ambilar.se/bilar/'
        frameborder='0'
        scrolling='no'
      ></iframe>
    </>
  );
}
