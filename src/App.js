import logo from './logo.svg';
import './App.css';

import md5 from "md5";
import React, {useEffect} from "react";
import axios from "axios";

const baseURL = 'http://gateway.marvel.com/v1/public/comics?';
const publicKey = '';
const privateKey = '';
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const Conexao: React.FC = () => {
  useEffect(() => {
    axios.get(baseURL+'ts=${ts}&apikey=${publicKey}&hash=${hash}')
        .then(response => console.log(response))
        .catch(erro => console.log(erro))
  },[]);
  return null;
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

function App() {
  Conexao();
  initMap();
  return ("index.html");
}

export default App;
