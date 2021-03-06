import { User } from "src/app/users/user.class";

export class Item {
    id: number;
    name: string;
    description: string;
    filePath: string;
    price: number;
    userId: number;

    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.filePath = "";
        this.price = 0;
        this.userId = 0;
    }
}