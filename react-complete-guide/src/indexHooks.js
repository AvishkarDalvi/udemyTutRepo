import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithHooks from './AppWithHooks';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppWithHooks />, document.getElementById('root'));
registerServiceWorker();
