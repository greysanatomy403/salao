import React, { useState, useEffect } from 'react';
import './home.css';
import {Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import TipoServico from '../../components/tipo-servico/tipo-servico'


function Home(match){

    const [salao, setSalao] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    let listaservicos = [];

    useEffect(() => {
            firebase.firestore().collection('salao').get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if(doc.data().cliente.indexOf(pesquisa) >= 0)
                        {
                        listaservicos.push({  
                        id: doc.id,
                        ...doc.data()
                    })
                }
            })
                
                setSalao(listaservicos);
          });
    });

    return(
        <>
        <Navbar/>
        
        <div className='row p-5'>
            <h2 className='mx-auto pb-2'>CLIENTES</h2>
            <img src='https://www.canva.com/design/DAF8y8XYJQ4/3j1bRKSxwGTtp8mfK94MUA/edit'></img>
        <input onChange={(e) => setPesquisa(e.target.value)} type='text' className='form-control text-center' placeholder='Pesquisar Serviço pelo titulo'></input>
        </div>
        
        <div className='row p-3'>
        {salao.map(item => <TipoServico key={item.id} id={item.id} img={item.foto} cliente={item.cliente} servico={item.servico} tipo={item.tipo} descricao={item.descricao} profissional={item.profissional} data={item.data} hora={item.hora} detalhes={item.detalhes} visualizacoes={item.visualizacoes}/>) }
        
        </div>
        </>
    )
}

export default Home;