"use client";

import { useEffect, useState } from "react";
import { ModelMessage } from "../../../../schemas/messages.schema";
import { useSocket } from "../../../components/ProviderSocket";

interface Props {
  messages: Array<ModelMessage>;
}

export const Messages = ({ messages: messagesProps }: Props) => {
  const [messages, setMessages] = useState<Array<ModelMessage>>(messagesProps);
  const socket = useSocket();

  useEffect(() => {
    socket?.on("new-message", (message: ModelMessage) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket?.off("message");
    };
  }, [socket]);

  return (
    <>
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.content}</p>
          <p>{message.username}</p>
          <p>
            {new Date(message.created_at).getDate()}.
            {new Date(message.created_at).getMonth()}.
            {new Date(message.created_at).getFullYear()}
          </p>
        </div>
      ))}
    </>
  );
};
