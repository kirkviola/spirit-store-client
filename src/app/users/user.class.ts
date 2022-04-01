import { Item } from "../../item.class";

export class User {
  id: number;
  name: string;
  noodleNuggets: number;
  items!: Item[];

  constructor() {
    this.id = 0;
    this.name = "";
    this.noodleNuggets = 0;
  }
}

