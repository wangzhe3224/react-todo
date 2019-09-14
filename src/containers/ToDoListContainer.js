// ./src/containers/ToDoListContainer.js

import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';

// 把State中的部分属性，映射到Props中
const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  };
};
// 通过connect，这个container组件就订阅了store的状态变化，一旦状态变化，组件也会被触发
const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoListContainer;
