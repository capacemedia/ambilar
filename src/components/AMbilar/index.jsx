import React, { useEffect } from 'react'
import {Container, Button} from "reactstrap";
import {useHistory} from 'react-router-dom';
import MainImage from './../../assets/car-images/main-image.jpg';

import './style.css'

export default function AMBilar() {
    const history = useHistory();
    const handleBuy = () => {
        history.push({
            pathname: '/catalog',
        });
    }

    const sellCar = () => {
        history.push({
            pathname: '/sell-car',
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <section className='main-section'>
            <img className='main-image' src={MainImage} alt="main"/>
            <div className='content'>
                <Container>
                    <div className='textOnSlider'>
                        <h1 className='title'>
                            Välkommen till AM Bilar <br className='hide-when-mobile'/> i Hedemora
                        </h1>
                        <p className='para'>
                            Vi hjälper dig att hitta din drömbil och köper gärna din gamla bil
                        </p>
                        <Button className='btn-danger btn-car' onClick={sellCar}>Sälj din bil</Button>
                        {' '}
                        <Button style={{color: "#FFFFFF"}}
                                outline={true}
                                className='btn-car'
                                onClick={handleBuy}>Köp din bil</Button>
                    </div>
                </Container>
            </div>
        </section>
    )
}
