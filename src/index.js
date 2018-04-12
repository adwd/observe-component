import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators';

ReactDOM.render(
  <App 
    timer={interval(100)}
    users={interval(500).pipe(map(i => `user${i}`))}
  />,
  document.getElementById('root')
);

registerServiceWorker();
