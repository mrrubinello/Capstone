import { TodoItem, TodoList, Checkbox, Liste } from "./styles";

export default function Listpage() {
  const todoListData = [
    { id: 1, text: "Water the plants" },
    { id: 2, text: "Clean the houses" },
    { id: 3, text: "collect the eggs" },
  ];

  return (
    <ul>
      {todoListData.map((todo) => (
        <TodoItem key={todo.id}>
          <Checkbox />
          {todo.text}
        </TodoItem>
      ))}
    </ul>
  );
}
