import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import TipoServico from '../../components/tipo-servico/tipo-servico'


function Home({match}){


    
    return(
        <>
        <Navbar/>
        
        
        </>
    )
}

export default Home;