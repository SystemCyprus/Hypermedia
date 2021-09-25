import React, { Component } from 'react';

class Poisson extends Component {
    render() {
        return (
            <h1>
                Je suis un poisson
                {this.props.ordre
                    ? " appartenant a l'ordre " + this.props.ordre
                    : undefined}
                {this.props.vitesse
                    ? " et j'ai une vitesse de " + this.props.vitesse
                    : undefined}
                {this.props.manger
                    ? this.props.manger()
                    : undefined}
            </h1>
        )
    }
}

export default Poisson;