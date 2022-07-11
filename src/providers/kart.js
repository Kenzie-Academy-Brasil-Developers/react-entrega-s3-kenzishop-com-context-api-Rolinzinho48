// fazer os imports
import { createContext, useState } from 'react';

// criar o context
export const KartContext = createContext([]);


export const KartProvider = ({ children }) => {

	const kart = JSON.parse(localStorage.getItem("arrItem"));

  const addToKart = (item) => {
    const myJSON = JSON.stringify([...JSON.parse(localStorage.getItem("arrItem")), item]);
    localStorage.setItem("arrItem",myJSON);
  };

  const removeFromKart = (item) => {
    
    const newCatalogue = kart.filter((e)=>{
        return e.name !== item;
    })
    
    const myJSON = JSON.stringify(newCatalogue);
    localStorage.setItem("arrItem",myJSON);
    
      window.location.reload(false);
    
  };

return (
  <KartContext.Provider
   value={{ kart, addToKart, removeFromKart }}>
	{children}
  </KartContext.Provider>
 )
}

