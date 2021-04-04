import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import axios from 'axios';
import md5 from 'md5';

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

function App() {
  const conexao = Conexao();
  return ("index.html");
}

export default App;
