import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting="Hola :) Acá va ir el contenido del carrito"/>
      </header>
    </div>
  );
}

export default App;
