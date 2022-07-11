
import { ProductContent } from './styled'

import { KartContext } from '../../providers/kart'
import { useContext } from 'react'

function Product({name,price,image,btn}){

    const{kart,addToKart,removeFromKart} = useContext(KartContext)

    const obj = {
        name:name,
        price:price,
        image:image
    }

    return(
    
        <ProductContent>
        
            <img src={image}/>
            <span>{name}</span>
            <h1>R${price},00</h1>
            {
                btn==="Adicionar"?
                <button onClick={()=>addToKart(obj)}>{btn}</button>:
                <button onClick={()=>removeFromKart(name)}>{btn}</button>
            }
        </ProductContent>
        
    )
}

export default Product