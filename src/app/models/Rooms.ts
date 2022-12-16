import { Comment } from "./Comment";
import { User } from "./user";
export interface Room{
  id: number;
  name: string;
  description: string;
  image_url: string;
  youtube_url: string;
  price: number;
  comments: Comment[];
  user: User;


}
