import React, {useEffect} from 'react';
import axios from 'axios';
import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com/v1/public/comics?';
const publicKey = 'd2446f098f63d08b4988838e8f900060';
const privateKey = 'b380902cad5dd109768db104d10a5661d3c6a3fc';
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