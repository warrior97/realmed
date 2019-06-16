export class Person {
    public id:number;
    public name:string;
    public age:number;
    public image:string;
    
    public constructor(id?:number,name?:string,age?:number,image?:string){
        this.id=id;
this.name=name; this.age=age;
this.image=image;
    }
    

}
export class PersonRootObject{
    persons:Person[];
}