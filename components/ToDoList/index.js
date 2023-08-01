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

export default function TodoForm({ listItems, setListItems }) {
  const router = useRouter();

  function handleAdd(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setListItems([...listItems, { id: uid(), ...data }]);
    router.push("/");
  }

  return (
    <form onSubmit={handleAdd}>
      <input type="text" name="text" id="text" />
      <label htmlFor="text"></label>
      <button type="submit">Save</button>
    </form>
  );
}
