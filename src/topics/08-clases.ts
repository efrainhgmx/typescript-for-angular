export class Person {
    /* public name: string;
    public address: string; */

    /**
     * Primer método o función que se 
     * ejecuta en nuestra clase
     * al crear una clase new Person();
     */
    constructor(
        public name: string, 
        public address: string = 'No Address'
    ){}
}


const ironman = new Person('Iron Man', 'Malibu California');

console.log(ironman);