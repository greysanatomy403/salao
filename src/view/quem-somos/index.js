import React from 'react';
import './quem-somos.css'
import logo from '../../public/vinhal.png';
import sobreNos  from "../../public/vinhal4.png"

const QuemSomos = () => {
    return (
        <div className='quem-somos-container'>
    
                <img src={logo} alt='Vinhal Mix Car Logo' className='logo' />
          <div className='content'>
          <img src={sobreNos} alt='Sobre Nós' className='side-image' />
          <div className="text-content">
            <p className='description'>
                A Vinhal Mix Car Estética Automotiva & Lava Rápido foi fundada em 2017 por um entusiasta automotivo com uma visão clara: oferecer o melhor cuidado para veículos. 
                Nosso compromisso é atender cada automóvel de forma personalizada, avaliando suas necessidades especificas e o tipo de serviço mais adequado.
                </p>
                <p className='services'>
                Entre os serviços que oferecemos estão: lavagem ecológica, polimento técnico, vitrificação da pintura, higienização interna, limpeza de ar condicionado, 
                descontaminação da pintura, entre outros. 
                Trabalhamos com produtos de alta qualidade, reconhecidos tanto no mercado nacional qunato internacional, garantindo sempre os melhores resultados para o seu carro ou moto.
                </p>
                <p className='invitation'>
                Convidamos você a nos visitar e esclarecer todas as suas dúvidas. Nossa equipe realizará uma análise detalhada para identificar o processo mais indicado para o seu veículo.
                </p>
                <p className='social-media'>
                Acompanhe nossas redes sociais, Facebook e Instagram, para conferir ftos e videos dos nossos serviços!
            </p>
        </div>
        </div>
        </div>
    );
};

export default QuemSomos;