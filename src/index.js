import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

module.exports = function(options) {

    var internals = {}, utils = require('./utils');

    internals.comics = require('./comics')(options, utils);

    return internals;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();