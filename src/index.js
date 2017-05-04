import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './ToDoApp';

ReactDOM.render(
  <TodoApp cat={5} txt="this is the prop value" />,
  document.getElementById('root')
);
 