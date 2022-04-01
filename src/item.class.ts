import { User } from "./app/users/user.class";

export class Item {
  id: number;
  name: string;
  description: string;
  filePath: string;
  price: number;
  userId: number;

  user!: User;

  constructor(){
    this.id = 0;
    this.name = "";
    this.description = "";
    this.filePath = "";
    this.price = 0;
    this.userId = 0;
  }
}
