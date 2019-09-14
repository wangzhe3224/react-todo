// ./reducers/index.js
import { ADD_TODO } from '../actions';
import { RENDER_TODO_LIST } from '../actions';

const initialState = {
  toDoList: []
};

export default function toDoApp(state = initialState, action) {
  if (action.type === ADD_TODO) {
    let newToDoList = [
      ...state.toDoList,
      {
        ...action.toDoItem
      }
    ];
    return {
      ...state,
      toDoList: newToDoList
    };
  } else if (action.type === RENDER_TODO_LIST) {
    return {
      ...state,
      toDoList: action.toDoList
    };
  } else {
    return state;
  }
}
