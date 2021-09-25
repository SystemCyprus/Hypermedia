import './App.css';
import Etudiant from './composants/Etudiant.js';
import Bulletin from './composants/Bulletin.js';
import Classe from './composants/Classe.js';
import Etudiants from './composants/Etudiants.js';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fichier: "fichier01",
      nom: "M. Vermette",
      adresse: "5061 Rue Fullum, Montréal, QC H2H 2K3",
      code: "12345",
      nocours: "145987",
      professeur: "Haythem",
      hasplace: false,
      clients: [
        { nom: ' M. Vermette ', tel: 1234 },
        { nom: ' M. Côté ', tel: 4561 },
        { nom: ' M. Roy ', tel: 1245 }]
    };
  }
  render() {
    return (
      <div className="App">
        <Etudiant fichier={this.state.fichier} nom={this.state.nom} adresse={this.state.adresse} />
        <Bulletin code={this.state.code} />
        <Classe nocours={this.state.nocours} professeur={this.state.professeur} hasplace={this.state.hasplace} />
        <Etudiants clients={this.state.clients} />
      </div>
    );
  }
}