export class Store {
    location:String;
    address:String;
    zipcode:number;

constructor(location:String, address: String, zipcode:number){
    this.location = location;
    this.zipcode = zipcode; 
    this.address = address; 
    } 
}
