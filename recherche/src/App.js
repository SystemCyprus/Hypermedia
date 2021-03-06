import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import React, { useState } from 'react';

const Accueil = () => {
  return (
    <div>
      Je suis l'accueil de notre projet
    </div>
  )
}

const Faq = (props) => {
  console.log(props);
  return (
    <div>
      Je suis la foire aux questions
      <button onClick={() => props.history.goBack()}>Reculer</button>
      <button onClick={() => props.history.goForward()}>Avancer</button>
    </div>
  )
}

const Cgv = () => {
  return (
    <div>
      Je suis le Cgv
    </div>
  )
}

const Page404 = () => {
  const [connected, setConnected] = useState(false);

  if (!connected) {
    return (
      <div>
        <p>Vous n'êtes pas connecté</p>
        <button onClick={() => setConnected(true)}>Se connecter</button>
      </div>
    )
  }
  return (
    <Redirect to='/' />
  )
}

const CheckProps = (props) => {
  return (
    <div>
      <button onClick={() => props.history.push({
        pathname: '/faq',
        state: { params: 'abcdef' }
      })}>Aller sur la Faq</button>
        
    </div>
  )
}

const CheckPropsWithRouter = withRouter(CheckProps);

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <CheckPropsWithRouter />
        <header>
          <h2>Menu</h2>
          <ul>
            <li>
              <NavLink activeClassName="lien-actif" activeStyle={{ color: "red", fontWeight: "bold" }} to="/" exact>Accueil</NavLink>
            </li>
            <li>
              <NavLink activeClassName="lien-actif" activeStyle={{ color: "red", fontWeight: "bold" }} to="/Faq">Faq</NavLink>
            </li>
            <li>
              <NavLink activeClassName="lien-actif" activeStyle={{ color: "red", fontWeight: "bold" }} to="/Cgv">Cgv</NavLink>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/" component={Accueil} exact />
          <Route path="/Faq" component={Faq} />
          <Route path="/Cgv" component={Cgv} />
          <Route path="*" component={Page404} ch />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;