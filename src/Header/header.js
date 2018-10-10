import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
            <div className="logo">Logo</div>
                <nav className="menu">
                    <ul>
                        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={600} >Inicio</Link></li>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>Datos Personal</Link></li>
                        <li><Link activeClass="active" to="experience" spy={true} smooth={true} duration={500} >Experiencia</Link></li>
                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Header