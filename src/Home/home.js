import React, { Component } from 'react'
import logo from '../../images/fotoPerfil.png'
import fondo from '../../images/fondoHome.png'
import FontAwesome from 'react-fontawesome'

import './home.css'
class Home extends Component {
    renderUsersList() {
        return this.props.datos.datosPersonales.map((personal) => {
          return (
            <div className="information-dat" key={personal.id} >
                <strong>{personal.name}</strong>
                <span>{personal.value}</span>
            </div>
          )
        })
      }

    render() {
        return (
            <div className="home-container" name="home">
                <div className="content">
                    <div className="home-logo">
                        <figure>
                            <img src={logo} alt="FotoPerfil" />
                        </figure>
                        <p>
                            Obtener un puesto en la empresa y consolidarme, para contribuir con mi experiencia en prácticas y 
                            habilidad en el logro de las metas generales de la empresa y las responsabilidades a mi cargo, 
                            con la oportunidad de continuar desarrollándome para el buen desempeño de las funciones asignadas
                        </p>                        
                    </div>
                    <div className="home-information">
                        <hr />
                        <h1>Kevin Márquez</h1>
                        <p>Ingeniero en Computación</p>
                        <hr />
                        <div className="information">
                        { this.renderUsersList() }
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