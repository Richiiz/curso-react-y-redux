import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/pokemonList';
import './App.css';


function App() {
  return( 
  <div className="App">
    <Col span={8} offset={8}>
      < Searcher />
    </Col>
    <PokemonList />
  </div>
  );
}

export default App;
