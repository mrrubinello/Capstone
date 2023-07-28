import Heading from "../components/Heading";
import TodoList from "../components/TodoList";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Heading>🏄‍♂️🏄‍♀️🏄 Ruben´s geniale App 🏄🏄‍♀️🏄‍♂️</Heading>
      <TodoList />
      <Link href="/list">Liste</Link>
    </main>
  );
}
