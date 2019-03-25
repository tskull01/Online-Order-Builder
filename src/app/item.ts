export class Item {
    name:String;
    price:number;
    description?:String;

constructor(name:String, price: number, description?:String){
    this.name = name;
    this.description = description; 
    this.price = price; 
    } 
}
