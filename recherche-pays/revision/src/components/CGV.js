import { Button } from "semantic-ui-react";
const CGV =(props)=>{
    console.log(props);
    return(
      <div>
        Je suis la page CGV
        <Button onClick={()=>props.history.goBack()}> RECULER</Button>
        <Button onClick={()=>props.history.goForward()}> AVANCER</Button>
      </div>
    )
    }
export default CGV;