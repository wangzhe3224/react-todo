// ./actions/index.js

export const ADD_TODO = 'ADD_TODO';
// ... ADD_TODO ...
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';

// ... addToDo ...

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime().toString(),
      title
    }
  };
}
