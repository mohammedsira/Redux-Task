import React from 'react';
import { Provider } from 'react-redux';
import Cart from './Components/Cart';
import { datastore } from './Features/ProductStore';
import Navbar from './Components/Navbar';

const App = () => {


  return (
    <div>
      <Provider store={datastore}>
        <Navbar />
        <Cart />
      </Provider>
    </div>
  );
};

export default App;