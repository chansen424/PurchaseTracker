import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './style/index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';

const store = createStore(rootReducer)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)