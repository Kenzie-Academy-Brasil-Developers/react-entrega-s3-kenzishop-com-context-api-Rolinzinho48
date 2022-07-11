import Product from "../Product/index";

import { KartContext,KartProvider } from "../../providers/kart";
import { useContext } from "react";

function Kart({ type }) {
  const { kart } = useContext(KartContext);

  return (
    <>
      <KartProvider>
        <h1>Carrinho de Compras</h1>
        {kart.map((e, index) => (
          <Product
            key={index}
            name={e.name}
            price={e.price}
            btn={"remover"}
            ></Product>
            ))
        }
      </KartProvider>
    </>
  );
}

export default Kart;
