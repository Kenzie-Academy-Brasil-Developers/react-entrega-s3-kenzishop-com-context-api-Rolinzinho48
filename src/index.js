import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {KartProvider} from './providers/kart'
import {ListProvider} from './providers/productList'


ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <KartProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </KartProvider>
    </ListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
        