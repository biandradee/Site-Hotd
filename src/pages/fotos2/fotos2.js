import React from 'react';
import Logo from '../../assets/logo.png';
import './styles.css';

function Contato(){
    return(
        <div className='container-dragons'>
            <img id='logo2' alt='logo' src={Logo} />
            <h1>Dragões que já apareceram ou que irão aparecer na série</h1>
            <div className='dragon-cards-container'>
                <div className='dragon-cards'>
                    <div className="card2 dragons-1">Syrax - É a exuberante montaria da princesa Rhaenyra, seu nome foi dado em homenagem a uma deusa valiriana e suas escamas são amarelas</div>
                    <div className="card2 dragons-2">Vhagar - Será montaria de dois personagens na série, Laena Velaryon e Aemond Targaryen. É a maior e mais velha dragão da época</div>
                    <div className="card2 dragons-3">Caraxes - Dragão de Daemon Targaryen, provavelmente o mais feroz da época, suas escamas são avermelhadas e tem aparência de lagarto</div>
                    <div className="card2 dragons-4">Dreamfyre - Dragão azul, será montada por HeLaena Targaryen</div>
                    <div className="card2 dragons-5">Seasmoke - Dragão cinza-prateado, será montaria de Laenor e Addam Velaryon</div>
                    <div className="card2 dragons-6">Meleys - Conhecida como rainha vermelha, é uma das maiores dragões da época. Montaria de Rhaenys Targaryen</div>
                    <div className="card2 dragons-7">Vermithor - Conhecido como fúria de bronze, foi montaria do rei Jaehaerys e será montado por Hugh Hammer</div>
                    <div className="card2 dragons-8">Sunfyre - Conta com escamas douradas e reluzentes, considerado um dos dragões mais bonitos da época. Montaria de Aegon Targaryen</div>
                    <div className="card2 dragons-9">Tessarion - Possui escamas azuladas, será montaria de Daeron Targaryen</div>
                    <div className="card2 dragons-10">Moondancer - Dragão jovem e rápido, pertence a Baela Targaryen</div>
                    <div className="card2 dragons-11">Silverwing - Será montada pelo bastardo Ulf White</div>
                    <div className="card2 dragons-12">Sheepstealer - Dragão selvagem, com escamas marrons, conhecido por roubas ovelhas. Será domado por Nettles </div>
                    <div className="card2 dragons-13">Cannibal - Dragão selvagem que nunca foi montado. Tinha esse nome por comer dragões filhotes ou mortos</div>
                    <div className="card2 dragons-14">Vermax - Dragão muito jovem montado por Jacaerys Targaryen</div>
                    <div className="card2 dragons-15">Arrax - Dragão muito jovem montado por Lucerys Targaryen</div>
                    <div className="card2 dragons-16">Tyraxes - Dragão filhote de Joffrey Targaryen</div>
                </div>
            </div>
        </div>
    )
}

export default Contato;
