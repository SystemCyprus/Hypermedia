import './App.css';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import React from 'react';
import Accueil from './Composants/Accueil.jsx';
import Pays from './Composants/Pays.jsx';
import Page404 from './Composants/Page404.jsx';
import Recherche from './Composants/Recherche.jsx';
import { Menu } from 'semantic-ui-react';
 
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <header>
          <Menu>
            <Menu.Item as={NavLink} activestyl={ {fontWeight: "bold"}} to="/" exact>Accueil</Menu.Item>
            <Menu.Item as={NavLink} activestyl={{ fontWeight: "bold" }} to="/Recherche">Recherche</Menu.Item>
            <Menu.Item as={NavLink} activestyl={{ fontWeight: "bold" }} to="/Pays">Pays</Menu.Item>
          </Menu>
        </header>
        <Switch>
          <Route path="/" component={Accueil} exact />
          <Route path="/Recherche" component={Recherche} />
          <Route path="/Pays" component={Pays} />
          <Route path="*" component={Page404} ch/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;