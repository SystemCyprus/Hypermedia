function Tigre(props) {
    return (
        <h1>Je suis un tigre
            {props.ordre
                ? " appartenant a l'ordre " + props.ordre
                : undefined}
            {props.vitesse
                ? " et j'ai une vitesse de " + props.vitesse
                : undefined}
            {props.manger
                ? props.manger()
                : undefined}
        
        </h1>
    );
}

export default Tigre;