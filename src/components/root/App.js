import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import ProductList from "../products/ProductList";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Navi></Navi>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/product" component={ProductList}></Route>
        <Route exact path="/cart" component={CartDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
