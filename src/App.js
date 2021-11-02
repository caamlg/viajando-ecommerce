import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
