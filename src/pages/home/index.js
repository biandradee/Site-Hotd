import React from 'react'
import Header from '../../components/header/header';
import './styles.css'
import Video from '../../assets/video.mp4'
import Cards from '../../components/cards';
import Footer from '../../components/footer';

function Home(){
    return (
        <div>
            <>
                <Header />
                <div id='banner'></div>
                <div id='trailer-container'>
                    <div className='content'>
                        <video controls className='trailer'>
                            <source src={Video}/>
                            Seu navegador não possui suporte para vídeos
                        </video>
                        <div id='sinopse'>
                            <p className='description'>
                                Baseada no livro Fire and Blood de George R. R. Martin, House of The Dragon é um spin-off 
                                de Game of Thrones que narra a história de conquista de terras em Westeros, mais conhecida 
                                como a Dança dos Dragões. 
                            </p>
                            <a target="_blank"  rel="noreferrer" style={{ textDecoration: 'none'}} href="https://www.hbomax.com/br/pt/series/urn:hbo:series:GYsYeoAxKH8LCwgEAAAOR?countryRedirect=1">
                                <button  className='button'>Assistir aqui!</button>
                            </a>
                        </div>
                    </div>
                </div>
                <Cards />
                <Footer />
            </>
        </div>
    )
}

export default Home;