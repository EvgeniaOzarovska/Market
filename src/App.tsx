import React from 'react';
import { Router as ReactRouter } from 'react-router-dom';
import { history, Router } from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ShoppingCartProvider } from './providers/ShopingCartProvider';
import { GlobalStyle } from './styles/GlobalStyles';
import { MyThemeProvider } from './providers/AppThemeProvider';

function App() {
  return (
    <ShoppingCartProvider>
      <ReactRouter history={history}>
        <MyThemeProvider>
          <GlobalStyle />
          <Header/>
          <Router />
          <Footer />
        </MyThemeProvider>
      </ReactRouter>
    </ShoppingCartProvider>
  );
}
export default App;
