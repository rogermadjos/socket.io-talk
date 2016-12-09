import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

let root = document.getElementById('root');
ReactDOM.render(<App message={'Hello World!'}/>, root);

socket.on('connect', function (data) {
  ReactDOM.render(<App message={'Connected'}/>, root);
});