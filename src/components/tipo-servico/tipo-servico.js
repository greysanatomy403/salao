import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';
import './tipo-servico.css';


function TipoServico({id, img, cliente, descricao, servico, tipo, profissional, data, hora, detalhes, visualizacoes}){

     const [urlImagem, setUrlImagem] = useState();

     useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url));
     }, [urlImagem]);


     
     return(
        <div className='col-md-3 col-sm-12'>
            <img src={urlImagem} className='card-img-top img-cartao' alt='Imagem do Corte' />

            <div className='card-body'>
                <h5>{cliente}</h5>          
                <p className='card-text text-justify'>
                    {detalhes}
                    {descricao}</p>
                    <h5>{tipo}</h5> 
                    <h5>{profissional}</h5>
                    <p className='card-text text-justify'>
                    {data}</p>
                    <p className='card-text text-justify'>
                    {hora}</p>
                <div className='card-body'>
                    <h5>{servico}</h5>
                </div>

                <div className='row rodape-card d-flex align-items-center'>
                    <div className='col-6'>
                    <Link to={'/detalhes/' + id} className='btn btn-sm btn-detalhes'>+detalhes</Link>
                    </div>

                    <div className='col-6 text-right'>
                        <i className='fas fa-eye'></i> <span>{visualizacoes}</span>

                    </div>
                </div>
            </div>
        </div>
    
     )
}

export default TipoServico;