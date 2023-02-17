import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {useHistory} from 'react-router-dom';

import './style.css';

export default function SellCar() {
    const [confirmed, setConfirmed] = useState(false);
    const handleForm = () => {
        setConfirmed(true);
    };
    const history = useHistory();
    const handleBack = () => {
        history.push({
            pathname: '/',
        });
    }
    const backToCatalog = () => {
        history.push({
            pathname: '/catalog',
        });
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
            <Container className='sell-car' style={{minHeight: confirmed ? '400px': '720px'}}>
                <div className='back-to-home' onClick={handleBack}>
                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                    Tillbaka
                </div>

                {!confirmed ? (
                    <Row>
                        <Col md={6} className='sell-car-content'>
                            <form onSubmit={handleForm}>
                                <div className='contact-section'>
                                    <h3 className='form-heading'>Få din gratis värdering</h3>
                                    <p>
                                        Fyll i bilens reg. nummer och kontaktuppgifter till dig samt lite information om
                                        bilens utrustning, skick och däck.
                                    </p>
                                    <input type="text" placeholder='Registreringsnummer (ABC 123)'/>
                                    <div className='email-tel'>
                                        <input type='email' required placeholder='E-post *'/>
                                        <span className='or'>eller</span>
                                        <input type='text' placeholder='tel. nummer'/>
                                    </div>
                                    <input type='text' placeholder='Meddelande'/>

                                    <button className='contact-form-btn'>Skicka</button>
                                    <p className='contact-section-paragraph' style={{marginTop: '28px'}}>
                                        Vill du hellre ringa?
                                    </p>
                                    <p className='contact-section-paragraph'>
                                        Ring: <a style={{color: "black"}} href='tel:46 (0)72 908 51 78'>+46 (0)72 908 51
                                        78</a>
                                    </p>
                                </div>
                            </form>
                        </Col>
                    </Row>
                ) : (
                    <Row style={{marginTop: '32px'}}>
                        <Col md={6} className='confirmed-contact-container'>
                            <h3>Tack för att du valde oss</h3>
                            <p>
                                Din förfrågan är inskickad. Vi återkommer så fort vi är klara med bilens
                                värdering.
                            </p>
                            <button className='sell-car-btn' onClick={backToCatalog}
                                    style={{width: '100%', marginTop: '38px'}}>
                                Hitta din nästa bil
                                <div>
                                    {' '}
                                    <i className='fa fa-long-arrow-right'></i>
                                </div>
                            </button>
                        </Col>
                    </Row>
                )}
            </Container>
    );
}
