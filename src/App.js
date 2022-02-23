import { Router as ReactRouter } from 'react-router-dom';
import { history, Router } from './router';
import './styles/reset.scss';

function App() {
  return (
    <ReactRouter history={history}>
      <Router />
    </ReactRouter>
  );
}

export default App;