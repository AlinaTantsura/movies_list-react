import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/movies_list-react'>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
