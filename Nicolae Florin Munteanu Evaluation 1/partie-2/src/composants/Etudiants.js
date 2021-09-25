import React, { useState } from 'react';

function Etudiants(props) {
    const [visible, setVisible] = useState(false);


    const renderClient = () => {
        return (props.clients.map((client) => {
                return (
                    <li>nom: {client.nom} tel: {client.tel}</li>
                )
        }))
    }

    return (
        <div>
            <h1>Je suis les etudiants.</h1>
            <button onClick={() => setVisible(!visible)}>{visible ? "Cacher" : "Afficher"}</button>
            <ul>{visible ? renderClient() : undefined}</ul>
        </div>
    )
}

export default Etudiants;