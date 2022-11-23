import NavBar from './componentes/NavBar';
import ItemCount from './componentes/ItemCount';
import CarItemList from './componentes/CarItemList';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar/>  
    <div> <h2>"hola mundo"</h2> </div>
    <div><CarItemList/></div>
    <ItemCount/>
    </div>
  );
}

export default App;
