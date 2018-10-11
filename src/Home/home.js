import React, { Component } from 'react'
import logo from '../../images/fotoHome.png'
import FontAwesome from 'react-fontawesome'

import './home.css'
class Home extends Component {
    render() {
        return (
            <div name="home" className="container">
                <div className="home-container">
                    <div className="home-logo">
                        <figure>
                            <img src={logo} />
                        </figure>
                    </div>
                    <div className="home-name">
                        <h1>Kevin Márquez</h1>
                        <p>Ingeniero en Computación</p>
                    </div>
                    <div className="home-redes">                        
                            <FontAwesome
                                className='super-crazy-colors'
                                name='facebook-square'
                                size='2x'
                                // style={{ color:"white", textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                            <FontAwesome
                                className='super-crazy-colors'
                                name='instagram'
                                size='2x'
                                // style={{ color:"white", textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                            <FontAwesome
                                className='super-crazy-colors'
                                name='twitter-square'
                                size='2x'
                                // style={{ color:"white", textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                            <FontAwesome
                                className='super-crazy-colors'
                                name='google-plus-square'
                                size='2x'
                                // style={{ color:"white", textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                    </div>
                    <input type="button" name="button" value="Descargar CV"></input>
                </div>
            </div>
        )
    }
}

export default Home