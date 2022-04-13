import React from 'react';
import { Router as ReactRouter } from 'react-router-dom';
import { history, Router } from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.scss';
import './styles/global.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ShoppingCartProvider } from './providers/ShopingCartProvider';

function App() {
  return (
    <ShoppingCartProvider>
      <ReactRouter history={history}>
        <Header />
        <Router />
        <Footer />
      </ReactRouter>
    </ShoppingCartProvider>
  );
}
export default App;
