import { TodoItem, TodoList, Checkbox, Liste } from "./styles";

export default function Listpage({ listItems }) {
  return (
    <ul>
      {listItems.map((todo) => (
        <TodoItem key={todo.id}>
          <Checkbox />
          {todo.text}
        </TodoItem>
      ))}
    </ul>
  );
}
