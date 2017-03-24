import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './App';

var data = [
	{ text: 'call Rony' },
  	{ text: 'get a driving license' },
  	{ text: 'open a bank account' }
];

ReactDOM.render(
  <TodoApp data={data} />,
  document.getElementById('root')
);
