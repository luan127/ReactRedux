import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store=createStore(reducers)

const Main = ()=>{
  return (
    <Provider
    store={store}
    >
      <Home/>
    </Provider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
