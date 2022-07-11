import { Header,Button } from "./style";
import { Link,useHistory } from "react-router-dom";

function HeaderComponent({redirect}){

    const history = useHistory();

   

    return(
        <Header>
            <h1>KenzieShop</h1>
            <div>
                
                    <Button onClick={()=> history.push(redirect)}>
                        Carrinho
                    </Button>
             
            </div>
        </Header>
        
    )
}

export default HeaderComponent;