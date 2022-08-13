import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';
//Standard imports

import './index.css';
//css import 

const container = document.getElementById('app'); //make sure this matches the index.html div 
const root = createRoot(container); 
root.render(
// { <React.StrictMode> }     //Strictmode is good but causes the app to initialise twice. This can cause problems. This won't happen in the production version but can cause some issues so you might want to switch it off
    //this should be as is and works for react version 18+
<Provider store={store}>  
  <App tab="home" store={store} />
</Provider>
// </React.StrictMode>
);




