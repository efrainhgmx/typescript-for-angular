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


const ironman = new Hero('Iron Man', 45, 'Tony Stark');

console.log(ironman);