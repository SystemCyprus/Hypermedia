import { useState } from "react";

export default function Etudiant(fichier, nom, adresse) {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <h1>Je suis un etudiant</h1>
            <button onClick={() => setVisible(!visible)}>{visible ? "Cacher" : "Afficher"}</button>
            <p>
                {visible
                    ? ' fichier: ' + fichier + ' nom: ' + nom + ' adresse: ' + adresse
                    : ""
                }
            </p>
        </div>
    )
}