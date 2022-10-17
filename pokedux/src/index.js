import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(pokemonsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
