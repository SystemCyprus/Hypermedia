import { useState } from "react";
import { Redirect } from "react-router-dom"
import { Button, Input } from "semantic-ui-react";



const Page404 =(props)=>{
    const [connected,setConnected] = useState(false)
    //const [data,setData] = useState([])
    //const [saisie,setSaisie] = useState("")

    

    if (!connected){

       return(
                <div>
                <p>VOUS ETES HORS LIGNE</p>
                <Button onClick = {()=>{setConnected(true)}}> 
                    SE CONNECTER
                </Button>
                
            </div>
       )
    }
    
    
    
    return(
      <div>
        Je suis la page 404
        {/* <Redirect to="/" /> */}

        <Button onClick={()=> props.history.push({
            pathname:'/',
            state:{params:connected}
        })  }> REVENIR A ACCUEIL</Button>
        
      </div>
    )
    }
export default Page404;