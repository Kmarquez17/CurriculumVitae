import React, { Component } from 'react'
import { Link } from 'react-scroll'
import logo from '../../images/logo.png'
import './header.css'
import FontAwesome from 'react-fontawesome'

class Header extends Component {
    handleClick = () => {
        console.log("Hola Kevin")
        const menu = document.querySelector('.menu')
        if (menu.classList.contains('is-active')) {
            menu.classList.remove('is-active')
        } else {
            menu.classList.add('is-active')
        }
    }
    render() {
        return (
            <div className="header">
                <div className="button-menu" onClick={this.handleClick}>
                    <FontAwesome
                        name='bars'
                        size='2x'
                    />
                </div>

                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="menu">
                    <ul>
                        <li><Link onClick={this.handleClick} activeClass="active" to="home" spy={true} smooth={true} duration={600} >Inicio</Link></li>
                        <li><Link onClick={this.handleClick} activeClass="active" to="about" spy={true} smooth={true} duration={500}>Datos Personal</Link></li>
                        <li><Link onClick={this.handleClick} activeClass="active" to="experience" spy={true} smooth={true} duration={500} >Experiencia</Link></li>
                        <li><Link onClick={this.handleClick} activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Header