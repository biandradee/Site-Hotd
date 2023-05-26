import React from 'react';
import './styles.css';
import Logo from '../../assets/logo.png';

function Fotos(){
    return (
        <div className='container'>
            <img id='logo1' alt='logo' src={Logo} />
            <h1>Personagens principais</h1>
            <div className='actor-cards-container'>
                <div className='cards-content'>
                    <div className="card banner-1">Rhaenyra Targaryen - Filha mais velha do rei Viserys I, herdeira do trono de ferro</div>
                    <div className="card banner-2">Daemon Targaryen - Conhecido como príncipe rebelde, tio e segundo marido da princesa Rhaenyra</div>
                    <div className="card banner-3">Alicent Hightower - Segunda esposa do rei Viserys I, filha de Otto Hightower</div>
                    <div className="card banner-4">Viserys I - Quinto rei Targaryen, escolhido pelo Grande Conselho de 101 </div>
                    <div className="card banner-5">Aemma Arryn - Primeira esposa do rei Viserys I, mãe da princesa Rhaenyra</div>
                    <div className="card banner-6">Aemond Targaryen - Terceiro filho do rei Viserys I com Alicent</div>
                    <div className="card banner-7">Aegon Targaryen - Primeiro filho do rei Viserys I com Alicent</div>
                    <div className="card banner-8">Helaena Targaryen - Segunda filha do rei Viserys I com Alicent</div>
                    <div className="card banner-9">Jacaerys Velaryon - Filho mais velho da princesa Rhaenyra e Laenor</div>
                    <div className="card banner-10">Lucerys Velaryon - Segundo filho da princesa Rhaenyra e Laenor</div>
                    <div className="card banner-11">Joffrey Velaryon - Filho mais novo da princesa Rhaenyra e Laenor</div>
                    <div className="card banner-12">Corlys Velaryon - Senhor das Marés e chefe da Casa Velaryon, marido de Rhaenys Targaryen</div>
                    <div className="card banner-13">Rhaenys Targaryen - Conhecida como a rainha que nunca foi, esposa de Corlys Velaryon</div>
                    <div className="card banner-14">Laenor Velaryon - Primeiro marido da princesa Rhaenyra</div>
                    <div className="card banner-15">Laena Velaryon - Primeira esposa de Daemon</div>
                    <div className="card banner-16">Baela Targaryen - Filha de Daemon e Laena</div>
                    <div className="card banner-17">Rhaena Targaryen - Filha de Daemon e Laena</div>
                    <div className="card banner-18">Otto Hightower - Pai de Alicent e Mão do Rei</div>
                    <div className="card banner-19">Larys Strong - Mestre dos sussuros no pequeno conselho do rei Viserys I</div>
                    <div className="card banner-20">Harwin Strong - Escudo juramentado e suposto pai dos filhos da princesa Rhaenyra</div>
                    <div className="card banner-21">Lyonel Strong - Mestre das leis e Mão do Rei</div>
                </div>
            </div>
        </div>
    )
}

export default Fotos;