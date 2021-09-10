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

const FAQ = (props) => {
  console.log(props);
  return (
    <div>
      Je suis la foire aux questions
      <button onClick={() => props.history.goBack()}>Reculer</button>
      <button onClick={() => props.history.goForward()}>Avancer</button>
    </div>
  )
}

const CGV = () => {
  return (
    <div>
      Je suis le CGV
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
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push({
        pathname: '/faq',
        state: { params: 'abcdef' }
      })}>Aller sur la FAQ</button>
        
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
              <NavLink activeClassName="lien-actif" activeStyle={{ color: "red", fontWeight: "bold" }} to="/" exact={true}>Accueil</NavLink>
            </li>
            <li>
              <NavLink activeClassName="lien-actif" activeStyle={{ color: "red", fontWeight: "bold" }} to="/FAQ">FAQ</NavLink>
            </li>
            <li>
              <NavLink activeClassName="lien-actif" activeStyle={{ color: "red", fontWeight: "bold" }} to="/CGV">CGV</NavLink>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/" component={Accueil} exact={true} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/CGV" component={CGV} />
          <Route path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;