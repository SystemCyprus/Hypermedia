import './App.css';
import { BrowserRouter, Link, NavLink, Route, Switch, withRouter } from 'react-router-dom';
import Accueil from './components/Accueil';
import FAQ from './components/Faq';
import CGV from './components/CGV';
import Page404 from './components/Page404';
import React from 'react';
import CheckProps from './components/CheckProps';




function App() {
  const SuperCheckProps = withRouter(CheckProps);
  return (
    <div >
     
     <React.Fragment>
     
      <BrowserRouter>
       <SuperCheckProps/>
        <ul>
          <li> 
            <NavLink  activeClassName="lien-actif" activeStyle={{color:"red"}} to="/" exact> Page Accueil</NavLink>
          </li>
          <li>
            <NavLink activeClassName="lien-actif" activeStyle={{color:"red"}} to="/faq"> Page FAQ</NavLink>
          </li>
          <li>
            <NavLink activeClassName="lien-actif" activeStyle={{color:"red"}} to="/cgv"> Page CGV</NavLink>
          </li>
        
        </ul>

      <Switch>
        <Route path="/" component={Accueil} exact />
        <Route path="/faq" component={FAQ}/>
        <Route path="/cgv" component={CGV}/>
        <Route path="/*" component={Page404}/>

        </Switch>
      </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
