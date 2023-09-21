import './App.css';
import NavBar from'./components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

const App = () => {
  return (
    <div>
      <NavBar>
      </NavBar>
      
      <ItemListContainer/>
    </div>
  )
}

export default App;
