import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Orders from '../pages/Orders';
import ProductInfo from '../pages/ProductInfo';
import NotFound from '../pages/NotFound'; 

import Header from '../components/Header';
import Footer from '../components/Footer';


const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carrinho" component={Cart} />
        <Route path="/pokemon/:param" component={ProductInfo} />
        <Route path="/pedidos" component={Orders} />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;