import React, { useState } from "react";
import List, { Props as TodoProps } from "./List";

const Head: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [addTodo, setAddTodo] = useState<string>("");
  const [id, incrementId] = useState<number>(0);
  const [ids, addIds] = useState<number[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddTodo(e.currentTarget.value);
  };

  const handleClick = () => {
    if (!addTodo) return;
    incrementId(id => ++id);
    const todo = {
      id,
      todo: addTodo
    };
    setTodos([...todos, todo]);
    setAddTodo("");
  };

  const deleteTodo = (id: number) => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id;
      })
    );
  };

  const handleSeletedDeleteClick = (id: number) => {
    addIds([...ids, id]);
  };

  const selectedDeleteTodos = () => {
    setTodos(
      todos.filter(todo => {
        return !ids.includes(todo.id);
      })
    );
  };

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        name="todo"
        value={addTodo}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      <button onClick={selectedDeleteTodos}>SELETED DELETE</button>
      <ul>
        {todos.map(todo => {
          return (
            <List
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              selectDeleteIds={handleSeletedDeleteClick}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Head;
