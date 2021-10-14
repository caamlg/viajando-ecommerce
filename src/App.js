import './App.css';
import { ItemCount } from './components/ItemCount';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="App-section">
      <ItemListContainer greeting="Hola :) Acá va ir el contenido del catálogo"/>
      <ItemCount initial="0" stock="10"/>
      </section>
    </div>
  );
}

export default App;
