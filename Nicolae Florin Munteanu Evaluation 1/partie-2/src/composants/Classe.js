import React, { useState } from 'react';

export default function Classe({ nocours, professeur, hasplaces}) {
    const [visible, setVisible] = useState(false);
    const places = hasplaces? " places disponnible." : " aucune place disponnible";
    return (
        <div>
            <h1>Je suis une classe.</h1>
            <button onClick={() => setVisible(!visible)}>{visible ? "Cacher" : "Afficher"}</button>
            <p>{visible
                ? ' no cours: ' + nocours + ' proffesseur: ' + professeur + ' places: ' + places
                : ""
            }</p>
        </div>
    )
}