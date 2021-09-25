import { useState } from "react";

export default function Bulletin(code) {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <h1>Je suis un bulletin.</h1>
            <button onClick={() => setVisible(!visible)}>{visible ? "Cacher" : "Afficher"}</button>
            <p>{visible
                ? ' code: ' + code
                : ""
            }</p>
        </div>
    )
}