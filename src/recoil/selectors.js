import {selector} from 'recoil';
import { todoListFilterState, todoListState } from './atoms';

// selector
// atom, selector はグローバルな値を提供するという点で共通している
// atom ... それ自身が値を持っている
// selector ... atomから算出された値を持っている
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  // getの引数にstate(atom)を渡して新たな値を算出する
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter(item => item.isComplete);
      case 'Show Uncompleted':
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  }
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(filteredTodoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(item => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});