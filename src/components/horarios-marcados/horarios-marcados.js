import React, { useState, useEffect } from 'react';
import './horario-marcados.css';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import TipoServico from '../tipo-servico/tipo-servico'


function HorarioMarcado({match}){


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
            <h2 className='mx-auto pb-2'>Clientes</h2>
        <input onChange={(e) => setPesquisa(e.target.value)} type='text' className='form-control text-center' placeholder='Pesquisar Serviço pelo titulo'></input>
        </div>
        
        <div className='row p-3'>
        {salao.map(item => <TipoServico key={item.id} id={item.id} cliente={item.cliente} descricao={item.descricao} detalhes={item.detalhes} visualizacoes={item.visualizacoes}/>) }
        
        </div>
        </>
    )
}

export default HorarioMarcado;