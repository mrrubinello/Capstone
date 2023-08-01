import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { uid } from "uid";

const TodoItemContainer = styled.li`
  margin: 5px;
  display: flex;
  align-items: center;
`;

const TodoText = styled.span`
  flex: 1;
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
`;

function TodoItem({ todo, onDelete }) {
  return (
    <TodoItemContainer>
      <TodoText>{todo}</TodoText>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </TodoItemContainer>
  );
}

export default function TodoList({ listItems, setListItems }) {
  const router = useRouter();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  function handleAdd(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    setListItems([...listItems, { id: uid(), ...data }]);
    console.log("listItems:", listItems);
    router.push("/");
  }

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAdd}>
        <input type="text" name="text" id="text" />
        <label htmlFor="text"></label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={() => handleDeleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}
