import { useState,createContext } from "react";

export const ListContext = createContext([]);

export const ListProvider =({children})=>{

    const [productList, setProductList]= useState([
        {name: "God of War", price: 179.00, image: "https://images-na.ssl-images-amazon.com/images/I/81gXqxyFrxL.jpg"},
        {name: "Assassin's Creed Origins", price: 35.00, image: "https://upload.wikimedia.org/wikipedia/pt/f/fb/Assassins_Creed_Origins_capa.png"},
        {name: "Fall Guys", price: 19.00, image: "https://gamescenter.pe/wp-content/uploads/2020/10/Fall-Guys.jpg"},
        {name: "Grand Theft Auto V", price: 62.00, image: "https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png"},
        {name: "Sifu", price: 173.00, image: "https://upload.wikimedia.org/wikipedia/pt/8/88/Sifu_capa.jpg"},
        {name: "Call of Duty", price: 55.00, image: "https://upload.wikimedia.org/wikipedia/pt/8/8e/Call_of_Duty_3_%28capa%29.jpg"},
        {name: "Overcooked", price: 15.00, image: "https://notadogame.com/uploads/game/cover/250x/5bfdc45fe7171.jpg"},
        {name: "Overcooked 2", price: 42.00, image: "https://notadogame.com/uploads/game/cover/250x/5bfdc51cca116.jpg"},
        {name: "Tom Clancy's Ghost Recon", price: 35.00, image: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12109201/1003585755.jpg?v=637142248520600000"},
        {name: "Super Mario Bros", price: 380.00, image: "https://2.bp.blogspot.com/-m9CUJqxij9s/UCMVCmPzfnI/AAAAAAAAJiI/SRng6Esg2Ic/s1600/mario+box+art.png"},
        {name: "Forza Horizon 5", price: 128.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxKBvWqZuhf78mzModzYO5qqCUFZEfoN8xQ&usqp=CAU"},
        {name: "Dirt 5", price: 88.00, image: "https://store-images.s-microsoft.com/image/apps.60572.14564144462522178.840de816-99f5-48c8-885d-33b3b0dffe20.f97bfaca-8f43-4b52-b516-019916b0b911"}    
    ])

    return(
        
        <ListContext.Provider value={{productList}}>
            {children}
        </ListContext.Provider>
    )

}