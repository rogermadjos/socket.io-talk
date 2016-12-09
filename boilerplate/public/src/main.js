import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

let root = document.getElementById('root');
ReactDOM.render(<App message={'Hello World!'}/>, root);

var socket = io('http://localhost:8080');

socket.on('connect', function (data) {
  ReactDOM.render(<App message={'Connected'}/>, root);
});