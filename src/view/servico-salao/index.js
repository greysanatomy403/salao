import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import './servico-salao.css';
import Navbar from '../../components/navbar/';
import firebase from '../../config/firebase';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function ServicoSalao(props) {

    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [cliente, setCliente] = useState();
    const [endereco, setEndereco] = useState();
    const [cidade, setCidade] = useState();
    const [bairro, setBairro] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [profissional, setProfissional] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [hora, setHora] = useState();
    const [fotoAtual, setFotoAtual] = useState();
    const [fotoNova, setFotoNova] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    

    const { id } = useParams();
    const storage = firebase.storage();
    const db = firebase.firestore();
    
    useEffect(() => {
        if(id){
          firebase.firestore().collection('salao').doc(id).get().then(resultado => {
              setCliente(resultado.data().cliente)
              setEndereco(resultado.data().endereco)
              setCidade(resultado.data().cidade)
              setBairro(resultado.data().bairro)
              setTipo(resultado.data().tipo)
              setDetalhes(resultado.data().detalhes)
              setProfissional(resultado.data().profissional)
              setSelectedDate(resultado.data().data ? new Date(resultado.data().data) : null);
              setHora(resultado.data().hora)
              setFotoAtual(resultado.data().foto)
          })
        }
}, [id])

function atualizar () {   
        setMsgTipo(null);
        setCarregando(1);

        if(fotoNova)
        storage.ref(`imagens/${fotoNova.name}`).put(fotoNova);

            db.collection('salao').doc(id).update ({
                cliente: cliente,
                endereco: endereco,
                cidade: cidade,
                bairro: bairro,
                tipo: tipo,
                detalhes: detalhes,
                data: selectedDate,
                hora: hora,
                profissional: profissional,
                foto: fotoNova ? fotoNova.name : fotoAtual
               }).then(() => {
                setMsgTipo ('sucesso');
                setCarregando(0);
               }).catch(erro => {
                setMsgTipo ('erro');
                setCarregando(0);
             });
}

    
    function cadastrar() {
       
        setMsgTipo(null);
        setCarregando(1);


        storage.ref(`imagens/${fotoNova.name}`).put(fotoNova).then(() => {
            db.collection('salao').add ({
                cliente: cliente,
                endereco: endereco,
                cidade: cidade,
                bairro: bairro,
                tipo: tipo,
                detalhes: detalhes,
                data: selectedDate,
                hora: hora,
                profissional: profissional,
                foto: fotoNova.name,
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

        });
    }
    
    return (
        <>
        <Navbar/>
    
        <div className='col-12 mt-5' >
            <div className='row'>
                <h3 className='mx-auto font-weigth-bold'>{id ? 'ATUALIZAR SERVIÇO' : 'AGENDAR HORARIO'}</h3>
                <i class="bi bi-clock"></i>
            </div>

            <form>
            <div className='form-group row '>
            <div className='col-md-4'>
                <label>Cliente</label>
                <input onChange={(e) => setCliente(e.target.value) } type='text' className='form-control' value={cliente && cliente}/>
            </div>
            </div>

            <div className='form-group row'>
            <div className='col-md-4'>
                <label>Endereço/N°</label>
                <input onChange={(e) => setEndereco(e.target.value) } type='text' className='form-control' value={endereco && endereco}/>
            </div>
            </div>

            <div className='form-group row'>
                <div className='col-md-2'>
                <label>Cidade</label>
                <input onChange={(e) => setCidade(e.target.value) } type='text' className='form-control' value={cidade && cidade}/>
            </div>
            <div className='col-md-2'>
                <label>Bairro</label>
                <input onChange={(e) => setBairro(e.target.value) } type='text' className='form-control' value={bairro && bairro}/>
            </div>
            </div>

            <div className='form-group row'>
            <div className='col-md-4'>
                <label>Tipo do serviço</label>
                <select onChange={(e) => setTipo(e.target.value) } className='form-control' value={tipo && tipo}>
                <option disabled selected value>-- Selecione um serviço --</option>
                <option>Lavagem ecológica</option>
                <option>Lavagem a seco de bancos</option>
                <option>Higienização Interna</option>
                <option>Higienização e hidratação de couro</option>
                <option>Poliment Tecnico</option>
                <option>Espelhamento 3M</option>
                <option>Vitrificação</option>
                <option>Descontaminação de pintura</option>
                <option>Cristalização de vidro</option>
                <option>Remoção de chuva ácida</option>
                <option>Lavagem a seco de motor</option>
                <option>Revitalização de plástico</option>
                <option>Polimento de farol</option>
                <option>Limpeza de teto</option>
                </select>
            </div>
            </div>
            <div className='form-group row'>
            <div className='col-md-4'>
                <label>Modelo do veículo:</label>
                
                <textarea onChange={(e) => setDetalhes(e.target.value) } className='form-control' rows="3" value={detalhes && detalhes} />
            </div>
            </div>
            
            <div className='form-group row'>
                <div className='col-3'>
                <label>Data:</label>
                <DatePicker
                                selected={selectedDate} // Estado selecionado
                                onChange={(date) => setSelectedDate(date)} // Atualiza o estado quando a data é selecionada
                                className='form-control'
                                dateFormat="dd/MM/yyyy" // Formato da data
                                placeholderText="Selecione uma data" // Texto de placeholder
                            />
            </div>
            
            </div>
            <div className='form-group row'>
                <div className='col-3'>
                <label>Hora:</label>
                <input onChange={(e) => setHora(e.target.value) } type='time' className='form-control'value={hora && hora}/>
            </div>
            </div>

            <div className='form-group'>
                <label>Upload da foto {id ? '(Se quiser manter a mesma foto não precisa escolher um novo arquivo)' : null }:</label>
                <input onChange={(e) => setFotoNova(e.target.files[0]) } type='file' className='form-control'/>
            </div>

            

           <div className='row'>
            {
                carregando > 0 ? <div class="spinner-border text-success mx-auto" role="status"><span class="sr-only">Loading...</span></div>
           : <button onClick={id ? atualizar : cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>{id ? 'ATUALIZAR SERVIÇO' : 'AGENDAR SERVIÇO'}</button>
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