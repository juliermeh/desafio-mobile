import logo from './logo.svg';
import './App.css';
import '/public/Comics';

import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import comics from "../public/Comics";


exports.createClient = function(options) {

  if (!options) {
    throw new Error('You must provide API credentials');
  }

  if (!options.privateKey) {
    throw new Error('You must specify a private API key');
  }

  if (!options.publicKey) {
    throw new Error('You must specify a public API key');
  }

  return require('./lib')(options);
};

function App() {
  // Conexao();
  return('index.js');
}

export default App;
