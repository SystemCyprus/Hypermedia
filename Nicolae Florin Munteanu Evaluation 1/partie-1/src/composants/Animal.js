import React, { Component } from 'react';
import Poisson from './Poisson';
import Tigre from './Tigre';

class Animal extends Component {
    render() {
        if (!this.props.type)
            return (<h1>Je suis un animal</h1>)
        if (this.props.type === "poisson")
            return (
                <div>
                    <Poisson ordre="Vertébrés aquatiques" vitesse="10 km/h" manger={() => console.log("je mange des crustacés")}/>
                </div>
            )
        if (this.props.type === "tigre")
            return (
                <div>
                    <Tigre ordre="Carnivore féliforme" vitesse="50 km/h" manger={() => console.log("je mange de la viande")}/>
                </div>
            )
    }
}

export default Animal;