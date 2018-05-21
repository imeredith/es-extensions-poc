import { ExtensionStore } from 'es-extensions-api';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Make sure ExtensionStore is loaded
ExtensionStore.getInstance()

document.addEventListener("DOMContentLoaded", (event) =>{
  ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
  );
})
registerServiceWorker();
