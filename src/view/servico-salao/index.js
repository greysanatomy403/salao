import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import './servico-salao.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';

function ServicoSalao() {
    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [cliente, setCliente] = useState();
    const [tipo, setTipo] = useState();
    const [descricao, setDescricao] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const db = firebase.firestore();

    function cadastrar() {
    setMsgTipo(null);
    setCarregando(1);

       db.collection('salao').add ({
        cliente: cliente,
        tipo: tipo,
        descricao: descricao,
        data: data,
        hora: hora,
        usuario: usuarioEmail,
        visualizacoes: 0,
        publico: 1,
        criacao: new Date()
       }).then(() => {
        setMsgTipo ('sucesso');
        setCarregando(0);
       }).catch(erro => {
        setMsgTipo ('erro');
        setCarregando(0);
       });
       }
    
    return (
        <>
        <Navbar/>
        <div className='col-12 mt-5'>
            <div className='row'>
                <h3 className='mx-auto font-weigth-bold'>Novo Serviço</h3>
            </div>

            <form>
            <div className='form-group'>
                <label>Cliente</label>
                <input onChange={(e) => setCliente(e.target.value) } type='text' className='form-control'/>
            </div>

            <div className='form-group'>
                <label>Tipo do serviço</label>
                <select onChange={(e) => setTipo(e.target.value) } className='form-control'>
                <option disabled selected value>-- Selecione um serviço --</option>
                <option>Corte</option>
                <option>Tintura</option>
                <option>Tratamento capilar</option>
                <option>Alisamento</option>
                <option>Progressiva</option>
                <option>Mechas</option>
                <option>Luzes</option>
                <option>Reflexos</option>
                <option>Manicure</option>
                <option>Pedicure</option>
                </select>
            </div>

            <div className='form-group'>
                <label>Descrição do serviço:</label>
                <textarea onChange={(e) => setDescricao(e.target.value) } className='form-control' rows="3" />
            </div>
            
            <div className='form-group row'>
                <div className='col-3'>
                <label>Data:</label>
                <input onChange={(e) => setData(e.target.value) } type='date' className='form-control'/>
            </div>
            </div>

            <div className='col-3'>
                <label>Hora:</label>
                <input onChange={(e) => setHora(e.target.value) } type='time' className='form-control'/>
            </div>

           <div className='row'>
            {
                carregando > 0 ? <div class="spinner-border text-success mx-auto" role="status"><span class="sr-only">Loading...</span></div>
           : <button onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Marcar Horario</button>
            }
           </div>
      
           </form>

           <div className="msg-login texte-white text-center mt-2">
                    {msgTipo === 'sucesso' && <span><strong>WoW!</strong>Horario Marcado</span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong>Não foi possivel marcar horario</span>}
                </div>
        </div>
        </>
    )
}

export default ServicoSalao;