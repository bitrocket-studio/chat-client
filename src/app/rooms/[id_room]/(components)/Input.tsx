"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../../../components/ProviderSocket";

interface Props {
  id_room: string;
}

export const Input = ({ id_room }: Props) => {
  const socket = useSocket();
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    socket?.emit("join-room", id_room);

    return () => {
      socket?.emit("leave-room", id_room);
    };
  }, [socket, id_room]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      socket?.emit("send-message", {
        id_room,
        content: input,
        username: "user",
      });
      setInput("");
    }
  };

  return (
    <div>
      <input value={input} onChange={onChange} onKeyDown={onKeyDown} />
    </div>
  );
};
