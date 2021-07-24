import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InventarioPage from './pages/Home';
import ClienteManager from './pages/Clientes';
import ProdutoManager from './pages/Produtos';
import ListClient from './pages/ClientesCadastrados';
import ListProduct from './pages/ProdutosCadastrados';


function App() {
  return (
    <><Router>
      <Switch>
        <Route exact path="/" exact component={InventarioPage} />
        <Route exact path="/clientescadastrados" exact component={ListClient} />
        <Route exact path="/clientescadastrados/adicionar" exact component={ClienteManager} />
        <Route exact path="/produtoscadastrados" exact component={ListProduct} />
        <Route exact path="/produtoscadastrados/adicionar" exact component={ProdutoManager} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

