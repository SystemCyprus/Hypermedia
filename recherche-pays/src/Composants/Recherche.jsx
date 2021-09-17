import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Label, Input, Button, Card, Image, Message } from "semantic-ui-react";

const Recherche = (props) => {
    const [nom, setNom] = useState("");
    const [pays, setPays] = useState([]);
    const [erreur, setErreur] = useState("");

    const renderPays = () => {
        return pays.map((unPays) => {
            return (
                <Card key={unPays.alpha3Code}>
                    <Image src={unPays.flag} />
                    <Card.Content>
                        <Card.Header>
                            <Link to={`/pays/${unPays.alpha3Code}`}>{unPays.name}</Link>
                        </Card.Header>
                    </Card.Content>
                </Card>
            )
        })
    }

    const onClick = () => {
        fetch(`https://restcountries.eu/rest/v2/name/${nom}?fields=name;alpha3Code;flag`)
            .then((response) => response.json())
            .then((donnees) => setPays(donnees))
            .catch((er) => setErreur(er));

    }

    return (
        <Container>
            <h1>Recherche</h1>
            <Label pointing="right">Pays</Label>
            <Input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <Button onClick={onClick}>Rechercher les pays</Button>
            {pays.length > 0 ? `Il y a ${pays.length} résultat(s)` : <Message warning >Il n'y a aucun résultat</Message>}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>
                {pays.length > 0 ? renderPays() : undefined}
            </div>
        </Container>
    )
}

export default Recherche;