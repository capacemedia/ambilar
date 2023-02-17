import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import ContactImage from '../../assets/about-us/contact-image.png';
import emailjs from 'emailjs-com';
import {ToastContainer, toast} from 'react-toastify';
import {Link} from 'react-router-dom';

import './style.css';
import 'react-toastify/dist/ReactToastify.css';

const success = () => toast.success('The message has been successfully sent!');
const err = () => toast.error('An error was encountered to sending email');

export default function Contact() {
    const handleSubmit = (e) => {
        console.log("handleSubmit")
        e.preventDefault();
        emailjs.sendForm('service_63x971m', 'template_vg4rxb8', e.target, 'YT5_KIDYa4jOnVDa-').then(
            (result) => {
                console.log("result")
                console.log(result.text);
                if (result.text === 'OK') {
                    success();
                }
            },
            (error) => {
                console.log("error")
                console.log(error.text);
                err();
            }
        );
        e.target.reset();
    };
    return (
        <>
            <Container className='contact-us-container'>
                <h2 className='section-title stock-heading'>Kontakta oss</h2>
                <Row>
                    <Col md={6} className='mt-3'>
                        <form onSubmit={handleSubmit}>
                            <div className='last-contact-section'>
                                <input type='text' placeholder='Namn' name='name'/>
                                <input required type='email' placeholder='E-post *' name='email'/>
                                <input type='text' placeholder='Tel. nummer' name='phonenumber'/>
                                <input type='text' placeholder='Meddelande' name='message'/>
                                <button className='btn_red'>Skicka</button>
                            </div>
                        </form>

                        <div>
                            <Row style={{marginLeft: 20}}>

                                <Col sm='7'>
                                    <p style={{fontWeight: 'bold', marginBottom: 4}}>Adress</p>
                                    <Link style={{color: 'black'}} target="_blank"
                                          to={"//www.google.com/maps/place/AM+BILAR/@60.289388,15.989157,15z/data=!4m2!3m1!1s0x0:0x15b8c8ee6692babe?sa=X&ved=2ahUKEwj8otWx0KX4AhVxSvEDHWxqDtkQ_BJ6BAg_EAU"}>Ivarshyttevägen
                                        12, Hedemora 77633 </Link>

                                </Col>

                                <Col>
                                    <p style={{fontWeight: 'bold', marginBottom: 4}}>Telefon</p>
                                    <a style={{color: 'black', textDecoration: "none"}} href='tel:46 (0)72 908 51 78'>+46 (0)72 908 51 78</a>
                                </Col>
                            </Row>
                            <Col style={{marginLeft: 20}}>
                                <p style={{fontWeight: 'bold', marginBottom: 4}}>E-post
                                </p>
                                <a style={{color: 'black', textDecoration: "none"}} href='mailto:info@ambilar.se'>info@ambilar.se</a>
                            </Col>

                        </div>
                    </Col>
                    <Col md={6} className='mt-3'>
                        <img className='map-image' src={ContactImage} alt=''/>
                    </Col>
                </Row>
            </Container>

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
    );
}
