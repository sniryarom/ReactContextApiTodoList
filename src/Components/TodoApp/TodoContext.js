import React from 'react';

export const todoContextStates = {
  todoList: [],
  todoListFiltered: []
};
  
  export const TodoContext = React.createContext({
    //todoList: [],
    //todoListFiltered: [],
    filterList: () => {}
  });