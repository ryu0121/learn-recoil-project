import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <RecoilRoot>
    <TodoList />
  </RecoilRoot>,
  document.getElementById('root')
);
