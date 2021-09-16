import { Button } from "semantic-ui-react";

const FAQ =(props)=>{
    console.log(props);
    //console.log(props.location.state.params);
    return(
      <div>
        Je suis la page FAQ
        <Button onClick={()=>props.history.goBack()}> RECULER</Button>
        <Button onClick={()=>props.history.goForward()}> AVANCER</Button>
      </div>
    )
    }
export default FAQ;