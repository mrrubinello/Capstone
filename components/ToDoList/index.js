import { TodoItem, TodoList, Checkbox } from "./styles";

export default function ToDoList() {
  const todoListData = [
    { id: 1, text: "Water the plants" },
    { id: 2, text: "Clean the houses" },
    { id: 3, text: "collect the eggs" },
  ];

  return (
    <TodoList>
      {todoListData.map((todo) => (
        <TodoItem key={todo.id}>
          <Checkbox />
          {todo.text}
        </TodoItem>
      ))}
    </TodoList>
  );
}
