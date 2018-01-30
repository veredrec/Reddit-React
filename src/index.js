import React from 'react';
import ReactDOM from 'react-dom';
import Reddit from './Reddit';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Reddit />, document.getElementById('root'));
registerServiceWorker();
