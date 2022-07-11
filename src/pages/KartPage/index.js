import Kart from "../../components/Kart";
import HeaderComponent from "../../components/Header";
import { KartProvider } from "../../providers/kart";


function KartPage(){
    
    return(
        <>
            <HeaderComponent redirect='/'></HeaderComponent>
            <KartProvider>
                <Kart></Kart>
            </KartProvider>
              
        </>
    )
}

export default KartPage