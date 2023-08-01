import Link from "next/link";
import TodoForm from "../components/ToDoList";

export default function FormList({ listItems, setListItems }) {
  return (
    <>
      <h1>Aufgabe hinzufügen</h1>
      <TodoForm listItems={listItems} setListItems={setListItems} />
      <Link href="/">Liste</Link>
    </>
  );
}
