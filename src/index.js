import React from 'react'
import ReactDOM from 'react-dom'
import  { Provider }  from 'react-redux'
import { Router } from 'react-router'
import { store,history } from './helpers';
import App from './containers/App'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
