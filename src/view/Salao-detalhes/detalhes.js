import React, {useState, useEffect} from "react";
import './detalhes.css';
import { Link, useParams, Navigate} from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';
import Navbar from "../../components/navbar";


function Detalhes() {

const [salao, setSalao ] = useState({});
const [urlImg, setUrlImg ] = useState({});
const usuarioLogado = useSelector(state => state.usuarioEmail);
const [carregando, setCarregando] = useState(1);
const [excluido, setExcluido] = useState(0);
const { id } = useParams();

function remover () {
    firebase.firestore().collection('salao').doc(id).delete().then(() => {
    setExcluido(1);

    })
}

    useEffect(() => {
        if(carregando) {
    firebase.firestore().collection('salao').doc(id).get().then(resultado => {
   setSalao(resultado.data())
   firebase.firestore().collection('salao').doc(id).update('visualizacoes', resultado.data().visualizacoes + 1)
   firebase.storage().ref(`imagens/${resultado.data().foto}`).getDownloadURL().then(url => {
    setUrlImg(url)
    setCarregando(0);
      });
    });
}else{
    firebase.storage().ref(`imagens/${salao.foto}`).getDownloadURL().then(url => setUrlImg(url))
}

},[])

    return (
    <>

     
    <Navbar />

    {excluido ? <Navigate to='/' /> : null } 

    <div className="container-fluid">
    {

        carregando ? <div className="row mt-5"> <div class="spinner-border text-success mx-auto" role="status"><span class="sr-only"></span></div> </div>
         :
        <div>
        <div className="row">
            <img src={urlImg} className="img-banner" alt="Banner" />

             <div className="col-12 text-right mt-1 visualizacoes">
                <i class="fas fa-eye"></i>  <span>{salao.visualizacoes +1}</span>

             </div>

            <h5 className="mx-auto mt-5 titulo"><strong>{salao.cliente}</strong></h5>
        </div>

        <div className="row mt-5 d-flex justify-content-around">
            <div className="col-md-3 col-sm-12 box-info p-3 ">
                <i className="fas fa-ticket-alt fa-2x"></i>
                <h5><strong>Tipo</strong></h5>
                <span className="mt-3">{salao.tipo}</span>
            </div>

            <div className="col-md-3 col-sm-12 box-info p-3 ">
                <i className="fas fa-calendar-alt fa-2x"></i>
                <h5><strong>Data</strong></h5>
                <span className="mt-3">{salao.data}</span>
            </div>

            <div className="col-md-3 col-sm-12 box-info p-3 ">
                <i className="fas fa-clock fa-2x"></i>
                <h5><strong>Hora</strong></h5>
                <span className="mt-3">{salao.hora}</span>
            </div> 
        </div>


         <div className="row box-detalhes mt-5">
            <div className="col-12 text-center">
            <h5><strong>Detalhes do Serviço</strong></h5>
            </div>
            <div className="col-12 text-center">
            <p>{salao.detalhes}</p>
            </div>
            
            
        </div>       

         {
             usuarioLogado === salao.usuario ?
             <Link to={`/editarservico/${id}`} className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link>
             : ''
         }

        {
        usuarioLogado === salao.usuario ? <button onClick={remover} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Remover Evento</button>
        : null
        }
        
    </div>

     
    }
    </div>
    </>
    )
}

export default Detalhes;