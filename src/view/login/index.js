import React, { useState, useEffect } from 'react';
import './login.css'
import { Link, Navigate} from 'react-router-dom';


import firebase from '../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';


import logo from '../../public/vinhal.png';

function Login() {


    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const dispatch = useDispatch();
   


    useEffect(() => {
    return () => {
        setEmail('');
        setSenha('');
        setMsgTipo('');
    };
}, []);
    
    
    function logar() {

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');
            setTimeout(() => {
                dispatch ({type: 'LOG_IN', usuarioEmail: email})
            }, 2000);

        }).catch(erro => {
            setMsgTipo('erro');

        });

    }
    
    function logarComGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            dispatch({type: 'LOG_IN', usuarioEmail: user.email});
        })
        .catch((error) => {
           console.error(error);
           setMsgTipo('erro');
        });
}

    return (
        <div className="login-content d-flex align-items-center">
                {useSelector(state => state.usuarioLogado) > 0 ? <Navigate to='/' /> : null }


                {/* Informações de contato */ }
       <div className='contact-info text-#daa520 text-right'>
    <span className='phone'>Telefone: (31) 98621-3021</span>
    <span className='email'>  |  Email: contato@exemplo.com</span>
       </div>

                
                <form className="form-signin mx-auto">
                <div className="text-center mb-4">
               
              
                <img className="logo" src={logo} alt="Logo do Salão New-Look" />
                <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold "></h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
                
                <button onClick={logar} class="btn btn-lg  btn-block btn-login" type="button">Logar</button>
                
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <button onClick={logarComGoogle} className="btn btn-lg  btn-block btn-login-google" type="button"><i className="fab fa-google"></i> Logar com Google</button>
                 
                
                <div className="msg-login texte-white text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Você esta conectado!</span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos!</span>}

                </div>
                
                <div className="opcoes-login mt-5 text-center">
                    <Link to="/usuariorecuperarsenha" className="mx-2">Recuperar Senha</Link>
                    <span className="text-white">&#9733;</span>
                    <Link to='/novousuario' className="mx-2">Quero Cadastrar</Link>
                
                </div>
            </form>
        </div>
    )
}

export default Login;
