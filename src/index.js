import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { configureStore } from './store';
import { Provider } from 'react-redux'; //Importing Provider to pass props across components.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //Importing Bootstrap

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
