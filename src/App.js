import { Router as ReactRouter } from 'react-router-dom';
import { history, Router } from './router';
import './styles/reset.scss'
import './styles/global.scss'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ReactRouter history={history}>
      <Header/>
      <Router />
      <Footer/>
    </ReactRouter>
  );
}
export default App;