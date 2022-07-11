import ProductList from "../../components/ProductList";
import { ListProvider } from "../../providers/productList";
import Header from '../../components/Header'
import { KartProvider } from "../../providers/kart";


function MainPage(){
    return(
        <>
            <Header redirect='/kart'></Header>
            <KartProvider>
                <ListProvider>
                    <h1>Lista de Produtos</h1>
                    <ProductList type={"productList"}></ProductList> 
                </ListProvider>
            </KartProvider>
           
        </>
    )
}

export default MainPage;