import React from 'react';

import Home from './components/Home';
import Catalog from './components/Catalog';
import SellCar from './components/Sell-car';
import CurrentCar from './components/Find-your-new-car/Current-car';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Navbar';
import AboutUs from './components/About-us';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sell-car' component={SellCar} />
          <Route exact path='/catalog' component={Catalog} />
          <Route exact path='/current-car' component={CurrentCar} />
          <Route exact path='/about-us' component={AboutUs} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;
