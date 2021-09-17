import { useState } from "react";
import { Redirect } from "react-router";
import { Container } from "semantic-ui-react";

const Page404 = () => {
  const [connected, setConnected] = useState(false);

  if (!connected) {
    return (
      <Container>
        <h1>404 - Page non trouvée</h1>
        <p>Vous n'êtes pas connecté</p>
        <button onClick={() => setConnected(true)}>Se connecter</button>
      </Container>
    )
  }
  return (
    <Redirect to='/' />
  )
}

export default Page404;