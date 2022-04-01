import { Item } from "../../item.class";

export class User {
  id: number;
  name: string;
  password: string;
  noodleNuggets: number;
  items!: Item[];

  constructor() {
    this.id = 0;
    this.name = "";
    this.password = "";
    this.noodleNuggets = 0;
  }
}

