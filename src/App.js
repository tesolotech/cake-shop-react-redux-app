import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/hooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IceCreamContainer />
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
