import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';


import './index.css';


const container = document.getElementById('app');
const root = createRoot(container); 
root.render(
// { <React.StrictMode> }
<Provider store={store}>
  <App tab="home" store={store} />
</Provider>
// </React.StrictMode>
);




