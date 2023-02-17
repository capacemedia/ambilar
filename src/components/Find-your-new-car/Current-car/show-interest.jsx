import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const success = () => toast.success('The message has been successfully sent!');
const err = () => toast.error('An error was encountered to sending email');


export default function ShowInterest() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_o4suydj', 'template_rylj5ex', e.target, '5Zc6TOcBiq6Vswb8D').then(
      (result) => {
        console.log(result.text);
        if (result.text === 'OK') {
          success();
        }
      },
      (error) => {
        console.log(error.text);
        err();
      }
    );
    e.target.reset();
    setShow(false);
  };

  return (
    <div>
      <>
        <button onClick={handleShow} className='find-car-btn' style={{ marginTop: '38px' }}>
        Intresseanmälan
          <div>
            {' '}
            <i className='fa fa-long-arrow-right'></i>
          </div>
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <p className='show-interest-header'>Intresseanmälan</p>
          <p className='show-interest-paragraph'>Har du en fråga angående bilen skriv den nedan. Vi kontaktar dig inom kort. </p>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <input required className='show-interest-input' placeholder='E-post *' type='email' />
              <p className='email-or-number'>eller</p>
              <input  className='show-interest-input' placeholder='tel. nummer' type='text' />
              <input  className='show-interest-input' placeholder='Meddelande' type='text' />
              <button className='show-interest-submit'>Skicka</button>
            </form>
          </Modal.Body>
        </Modal>
        <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </>
    </div>
  );
}
