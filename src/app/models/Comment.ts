import { Room } from "./Rooms";

export interface Comment {
  id: number;
  content: string;
  created_at: Date;
  room: Room;
}
