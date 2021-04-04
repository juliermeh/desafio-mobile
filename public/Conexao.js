import React, {useEffect} from 'react';
import axios from 'axios';
import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com/v1/public/comics?';
const publicKey = '';
const privateKey = '';
const ts = Number(new Date());
const hash_marvel = md5(ts + privateKey + publicKey);

const Conexao: React.FC = () => {
    useEffect(() => {},[]);
    return null;
}