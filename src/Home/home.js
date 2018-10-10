import React, { Component } from 'react'
import './home.css'
class Home extends Component {
    render() {
        return (
            <div name="home" className="container">
                <div className="home-container">
                    <figure>
                        {/* <img src="" alt=""> */}
                    </figure>
                    <div className="home-name">
                        <h1>Kevin Márquez</h1>
                        <p>Ingeniero en Computación</p>
                    </div>
                    <div className="home-redes">
                        <ul>
                            <li> <a href="#">Facebook </a></li>
                            <li> <a href="#">Instagram </a></li>
                            <li> <a href="#">Twitter </a></li>
                            <li> <a href="#">Google </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home