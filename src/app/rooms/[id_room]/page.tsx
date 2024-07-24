import axios from "axios";
import { ModelMessage } from "../../../schemas/messages.schema";
import { ModelRoom } from "../../../schemas/rooms.schema";
import { Input } from "./(components)/Input";
import { Messages } from "./(components)/Messages";

interface Params {
  params: {
    id_room: ModelRoom["id"];
  };
}

export default async function PageRoom({ params }: Params) {
  const response = await axios.get<Array<ModelMessage>>(
    `http://localhost:3000/api/rooms/${params.id_room}/messages`
  );
  const messages = await response.data;

  return (
    <>
      <Messages messages={messages} />
      <Input id_room={params.id_room} />
    </>
  );
}
