import './App.css';
import Header from "./components/Header"
import ProductList from './components/ProductList'
import Kart from './components/Kart'
import {Switch,Route} from 'react-router-dom'
import { ListProvider } from './providers/productList';
import { KartProvider } from './providers/kart';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <ListProvider>
          <Header redirect={'/kart'}></Header>
          <KartProvider>
            <ProductList type = "catalogue"></ProductList>
          </KartProvider>
        </ListProvider>
      </Route>
      
      <Route path='/kart' exact>
        <KartProvider>
          <Header redirect={'/'}></Header>
          <ProductList type = "kart"></ProductList>
        </KartProvider>
      </Route>
    </Switch>
    
  );
}

export default App;
