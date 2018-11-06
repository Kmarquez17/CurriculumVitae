import React, { Component } from 'react'
import logo from '../../images/fotoPerfil.png'
import fondo from '../../images/fondoHome.png'
import FontAwesome from 'react-fontawesome'

import './home.css'
class Home extends Component {

    render() {
        return (
            <div className="home-container" name="home">
                <div className="content">
                    <div className="home-logo">
                        <figure>
                            <img src={logo} alt="FotoPerfil" />
                        </figure>
                    </div>
                    <div className="home-information">
                        <h1>Kevin Márquez</h1>
                        <p>Ingeniero en Computación</p>
                        <hr />
                        <div className="information">
                            <div className="information-dat">
                                <strong>Edad</strong>
                                <span>21</span>
                            </div>
                            <div className="information-dat">
                                <strong>Sexo</strong>
                                <span>Masculino</span>
                            </div>
                            <div className="information-dat">
                                <strong>Dirección</strong>
                                <span>Del conchita palacios 7 cuadra al sur 1/2 al este</span>
                            </div>
                            <div className="information-dat">
                                <strong>Email</strong>
                                <span>marquezkrodriguez24@gmail.com</span>
                            </div>
                            <div className="information-dat">
                                <strong>Celular</strong>
                                <span>77653737</span>
                            </div>     
                        </div>
                    </div>
                </div>

                <div className="home-redes">
                    <FontAwesome  
                        className="home-redes-icon"                      
                        name='facebook-square'
                        size='2x'
                    />
                    <FontAwesome
                        className="home-redes-icon"                        
                        name='instagram'
                        size='2x'
                    />
                    <FontAwesome
                        className="home-redes-icon"                        
                        name='twitter-square'
                        size='2x'
                    />
                    <FontAwesome
                        className="home-redes-icon"                        
                        name='google-plus-square'
                        size='2x'
                    />
                </div>
            </div>
        )
    }
}

export default Home