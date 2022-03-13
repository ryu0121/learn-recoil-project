import * as React from 'react';
// useSetRecoilState は、 setValue(セッター) のみを返す
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';

let id = 0;
const getId = () => {
  return id++;
}

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = React.useState('');
  // useSetRecoilStateにAtomsを渡して、Atomsを更新するためのセッターを取得する
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  }

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}