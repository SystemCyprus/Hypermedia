import { Button } from "semantic-ui-react";

const CheckProps =(props)=>{
    console.log(props);
    return(
      <div>
        Je suis le composant CheckProps
        
        
        <Button onClick={()=> props.history.push({
            pathname:'/faq',
            state:{params:'abcdef'}
        })  }> ALLER A FAQ s</Button>

      </div>
    )
    }

export default CheckProps;