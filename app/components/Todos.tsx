"use client";
import { useTodos } from "@/app/services/queries";

export default function Todos() {
  const { data, setSize, size } = useTodos();

  if (!data) return "Loading...";

  return (
    <div>
      {data.map((todos) => {
        return todos.map((todo) => <div key={todo.id}>{todo.title}</div>);
      })}
      <button onClick={() => setSize(size + 1)}>Load more</button>
    </div>
  );
}
