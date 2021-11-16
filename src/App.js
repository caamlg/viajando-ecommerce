import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.js";
//import {getFirestore} from "./firebase";


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
