import React from 'react';
import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';

const TodoList = ({todos, removeTodo, changeChecked}) => {

  console.log("리스트 렌더");
  return (
    <div className='TodoList'>
        {todos && todos.map(todo => 
            <TodoListItem key={todo.id} todo={todo} 
                          removeTodo={removeTodo} changeChecked={changeChecked}/>
        )}
    </div>
  );
};

export default TodoList;