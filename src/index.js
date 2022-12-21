import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> Zorgt ervoor dat alles 4 keer wordt gelogd
      <Router>
          {/*Router moet om app heen anders werkt routing niet*/}
          <App/>
      </Router>
  // </React.StrictMode>
);