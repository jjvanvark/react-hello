import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.scss';
import configureStore from './store';
import Counter from './containers/counter';
import Login from './containers/login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <div>
      <Counter />
      <Login />
    </div>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
