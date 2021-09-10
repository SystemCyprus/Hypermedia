import { Component } from 'react';
import './App.css';
import Recherche from './Composants/Recherche.js';

class App extends Component {

  state = {
    data: [],
    error: ''
  }

  onSearch = (param1, param2) => {
    console.log(param1, param2)
  }


  render() {
    return (
      <div >
        <h1> Annuaire des administrations </h1>
        <Recherche onHaythem={this.onSearch} />
      </div>
    );

  }


}

export default App;