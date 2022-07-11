import { List } from './styled'

import Product from '../Product'
import { ListContext } from '../../providers/productList'
import { KartContext} from '../../providers/kart'
import { useContext } from 'react'

function ProductList({type}){

    const {productList} = useContext(ListContext)
    const {kart} = useContext(KartContext);
    
    console.log(kart);

    return(
          <List>
          
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


          </List>
    )
}

export default ProductList