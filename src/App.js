import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext.js";

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={[]}>
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
        </Switch>
      </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
