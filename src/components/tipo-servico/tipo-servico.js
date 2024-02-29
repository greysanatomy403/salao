import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import './tipo-servico.css';

function TipoServico({id, cliente, descricao, detalhes, visualizacoes}){
     return(
        <div className='col-md-3 col-sm-12'>
            <img src='https://via.placeholder.com/150' className='card-img-top img-cartao' alt='Imagem do Evento' />

            <div className='card-body'>
                <h5>{cliente}</h5>
                <p className='card-text text-justify'>
                    {descricao}
                </p>

                <div className='row rodape-card d-flex align-items-center'>
                    <div className='col-6'>
                    <Link to={'/servicodetalhes/' + id} className='btn btn-sm btn-detalhes'>+detalhes</Link>
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