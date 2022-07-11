import './App.css';
import Header from "./components/Header"
import ProductList from './components/ProductList'
import Kart from './components/Kart'
import {Switch,Route} from 'react-router-dom'


function App() {
  return (
    <Switch>
      <Route path='/' exact>
          <Header redirect={'/kart'}></Header>      
            <ProductList type = "catalogue"></ProductList>
      </Route>
      
      <Route path='/kart' exact>   
          <Header redirect={'/'}></Header>
          <ProductList type = "kart"></ProductList>
      </Route>
    </Switch>
    
  );
}

export default App;
