import { List } from './styled'

import Product from '../Product'
import { ListContext } from '../../providers/productList'
import { KartContext,KartProvider} from '../../providers/kart'
import { useContext } from 'react'

function ProductList({type}){

    const {productList} = useContext(ListContext)
    const kart = JSON.parse(localStorage.getItem("arrItem"));
    

    return(
          <List>
             <KartProvider>
             {
                type==="catalogue"&&
                productList.map((e,index)=>(
                  <Product key={index} name={e.name} price={e.price} image = {e.image} btn={'Adicionar'}></Product>
                ))  
              }
              {
                type==="kart"&&
                kart.map((e,index)=>(
                  <Product key={index} name={e.name} price={e.price} image = {e.image} btn={'Remover'}></Product>
                ))
              }

              </KartProvider>
          </List>
    )
}

export default ProductList