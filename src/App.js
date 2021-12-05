import "./App.css";
import { ItemListContainer } from "./components/Item/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/Item/ItemDetail/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { NavBar } from "./components/NavBar/NavBar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.js";

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <section className="App-section">
              <ItemListContainer />
            </section>
          </Route>
          <Route path="/category/:catId">
            <section className="App-section">
              <ItemListContainer />
            </section>
          </Route>
          <Route path="/item/:id">
          <section className="App-section">
            <ItemDetailContainer />
            </section>
          </Route>
          <Route path="/cart">
            <section className="App-section">
              <Cart/>
            </section>
          </Route>
        </Switch>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
