import React, { Component } from 'react'
import { Link } from 'react-scroll'
// import logo from '../../images/logo.png'
import './header.css'
import FontAwesome from 'react-fontawesome'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Kevin Márquez',
            name_icon: 'bars',
        }
    }
    
    handleClick = () => {
        console.log("Hola Kevin")
        // this.setState({active:false})
        const menu = document.querySelector('.menu')
        if (menu.classList.contains('is-active')) {
            menu.classList.remove('is-active')
            this.setState({ name_icon: 'bars' })
        } else {
            menu.classList.add('is-active')
            this.setState({ name_icon: 'times' })
        }
    }

    render() {
        return (
            <div className="header">
                <div className="button-menu" onClick={this.handleClick}>
                    <FontAwesome
                        className='button-menu-icon'
                        name={this.state.name_icon}
                    />
                </div>
                <div className="logo">
                    {/* <img src={logo} alt="Logo" /> */}
                    <p>{this.state.name}</p>
                </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <Link onClick={this.handleClick} activeClass="active" to="home" spy={true} smooth={true} duration={600}>
                                <FontAwesome className='header-icon' name='home' />
                                Inicio
                            </Link>
                        </li>

                        <li>
                            <Link onClick={this.handleClick} activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                                <FontAwesome className='header-icon' name='facebook-square' />
                                Sobre Mi
                            </Link>
                        </li>

                        <li>
                            <Link onClick={this.handleClick} activeClass="active" to="education" spy={true} smooth={true} duration={500}>
                                <FontAwesome className='header-icon' name='graduation-cap' />
                                Educación
                            </Link>
                        </li>

                        <li>
                            <Link onClick={this.handleClick} activeClass="active" to="experience" spy={true} smooth={true} duration={500} >
                                <FontAwesome className='header-icon' name='facebook-square' />
                                Experiencia
                            </Link>
                        </li>
                        <li>
                            <Link onClick={this.handleClick} activeClass="active" to="contact" spy={true} smooth={true} duration={500} >
                                <FontAwesome className='header-icon' name='envelope' />
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Header