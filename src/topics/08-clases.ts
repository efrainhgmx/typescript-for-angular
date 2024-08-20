export class Person {
    public name: string;
    public address: string;

    constructor(){
        this.name = 'Efra';
        this.address = 'CDMX';
    }
}


const ironman = new Person();

console.log(ironman);