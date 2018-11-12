import React, { Component } from 'react'
import './education.css'
class Education extends Component {

    // componentWillMount() {
    //     console.log(this.props.datos.datosEducacion[0].name)
    // }
    renderEducation() {
        return this.props.datos.datosEducacion.map((edu) => {
            return (
                <div className="education" key={edu.id}>
                    <div className="education-left">
                        <h4>{edu.name}</h4>
                        {/* <p>{menu.ciclo[0].centro}</p> */}
                    </div>
                    <div className="education-right">
                        <ul>
                            {
                                edu.ciclo.map((i) => {
                                    return (
                                        <li key={i.id}><strong>{i.anio}</strong> {i.centro}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div >
            )
        })
    }
    render() {
        return (
            <div name="education" className="container">
                <h1>Formación Académica</h1>
                {this.renderEducation()}

            </div>
        );
    }
}

export default Education