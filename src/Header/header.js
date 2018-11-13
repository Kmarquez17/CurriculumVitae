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


    renderMenu() {
        return this.props.datos.datosMenu.map((menu) => {
            return (
                <li key={menu.id}>
                    <Link onClick={this.handleClick} activeClass="active" to={menu.to} spy={true} smooth={true} duration={600}>
                        <FontAwesome className='header-icon' name={menu.icon_name} />
                        {menu.name}
                    </Link>
                </li>
            )
        })
    }

    handleClick = () => {
        //Hacemos que este evento se active en la resolucion de celular
        if (window.matchMedia("(max-width: 767px)").matches) {
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
    }

    render() {
        return (
            <div className="header" >
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
                        {this.renderMenu()}
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Header