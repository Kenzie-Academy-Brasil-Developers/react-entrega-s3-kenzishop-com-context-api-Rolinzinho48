// fazer os imports
import { createContext, useState } from 'react';

// criar o context
export const KartContext = createContext([]);

export const KartProvider = ({ children }) => {

  const [kart,setKart] = useState([]);

  const addToKart = (item) => {
    setKart([...kart,item]);
  };

  const removeFromKart = (item) => {
    
    const newCatalogue = kart.filter((e)=>{
        return e.name !== item;
    })
    
    setKart(newCatalogue);
    
  };

return (
  <KartContext.Provider
   value={{ kart, addToKart, removeFromKart }}>
	{children}
  </KartContext.Provider>
 )
}

