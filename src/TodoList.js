import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './recoil/selectors';
import { TodoListStats } from './components/TodoListStats';
import { TodoItem } from './components/TodoItem';
import { TodoListFilters } from './components/TodoListFilters';
import { TodoItemCreator } from './components/TodoItemCreator';


export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {
        todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
