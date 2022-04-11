export class ItemModel {
  id: number;
  name: string;
  description: string;
  filePath: string;
  price: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.filePath = '';
    this.price = 0;
  }
}
