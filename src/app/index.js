import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../state';

import routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>
  );
}

export default App;
