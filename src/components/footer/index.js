import React from 'react';
import './styles.css';
import Logo from '../../assets/logo.png';

function Footer() {
    return(
        <footer>
            <img src={Logo} alt='logo' id="logo" />
            <span>Todos os direitos reservados &copy;</span>
            <span>Desenvolvido por: Bianca Andrade</span>
        </footer>
    )
}

export default Footer;