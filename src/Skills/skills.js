import React, { Component } from 'react';
import './skills.css'
class Skills extends Component {
    state = {
        class: "skills"
    }
    // componentWillMount() {
    //     console.log(this.props.datos.datosHabilidades[0].name_skills)
    // }
    renderHabilidades() {
        return this.props.datos.datosHabilidades.map((habilidades) => {
            return (
                <div className={this.state.class +"-"+ habilidades.name_skills} key={habilidades.id}>
                    <h4>{habilidades.name_skills}</h4>
                    {
                        habilidades.skills.map((skills) => {
                            return (
                                <div className="skills-content" key={skills.id}>
                                    <div className="skills-value">
                                        <span>{skills.name}</span>
                                        <span>{skills.width}%</span>
                                    </div>
                                    <div style={{ width: skills.width + "%" }} className="progress"></div>
                                </div>
                            )
                        })

                    }
                </div>
            )
        })
    }
    render() {
        return (
            <div name="skills" className="container" >
                <h1>Formación Complementaria</h1>
                <div className="skills">
                    {this.renderHabilidades()}
                </div>
            </div>
        )
    }
}

export default Skills   