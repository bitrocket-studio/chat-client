import React from "react";
import Link from "next/link";
import { ModelRoom } from "../schemas/rooms.schema";

export default async function App() {
  const response = await fetch("http://localhost:3000/api/rooms");
  const rooms = (await response.json()) as Array<ModelRoom>;

  return (
    <ul>
      {rooms.map((room) => (
        <li key={room.id}>
          <Link href={`/rooms/${room.id}`}>{room.name}</Link>
        </li>
      ))}
    </ul>
  );
}
