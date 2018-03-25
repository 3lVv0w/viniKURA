import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import 'css/reset.css';
import 'css/global.css';

import App from './App';
import rootReducer from './reducers';

// import registerServiceWorker from './registerServiceWorker';
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
