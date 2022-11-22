import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD

import {Provider} from 'react-redux';
import store from './app/store';

=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 3b6a92cc22703a0d00964763adf6129f0e3a94d1

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Rodeo a la app del provider */}
    <Provider store={store}>
    
      <App />

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
