import TodoList from "../components/TodoList";
import Link from "next/link";

export default function FormList({ listItems, setListItems }) {
  return (
    <>
      <TodoList listItems={listItems} setListItems={setListItems} />
      <Link href="/">Liste</Link>
    </>
  );
}
