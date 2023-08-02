import { TodoItem, TodoList, Checkbox } from "./styles";
import Link from "next/link";

export default function Listpage({ listItems }) {
  return (
    <ul>
      {listItems.map((todo) => (
        <TodoItem key={todo.id}>
          <Checkbox />
          <Link href={`/${todo.id}`}>{todo.text}</Link>
        </TodoItem>
      ))}
    </ul>
  );
}
