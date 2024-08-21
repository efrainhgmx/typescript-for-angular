export class Person {
    /* public name: string;
    public address: string; */

    /*
     * Primer método o función que se 
     * ejecuta en nuestra clase
     * al crear una clase new Person();
     */
    constructor(
        public name: string, 
        public address: string = 'No Address'
    ){}
}


export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        /*
         * Super es una función que 
         * ejecuta el constructor de la 
         * clase a la que extiende
         */
        super(alterEgo, 'New York')
    }
}

export class HeroMarvel {
    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
       
        //this.person = new Person(realName, 'New York')
    }

}


const ironman = new Hero('Iron Man', 45, 'Tony Stark');
const person = new Person('Tony');
const spiderman = new HeroMarvel('Spider Man', 24, 'Peter Parker', person);

console.log(ironman);
console.log(spiderman);