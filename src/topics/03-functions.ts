function addNumbers(a: number, b:number){
    return a + b;
}

const addNumbersArrow = (a:number, b:number):number => a + b;


function multiply(firstNumber:number, sencondNumber?: number, base: number = 2){
    return firstNumber * base;
}

const result: number = addNumbers(1,2);
const rest: number = addNumbersArrow(5,10);
const multi: number = multiply(10);
console.log(result);
console.log(rest);
console.log(multi);

interface Character {
    name:string;
    hp:number;
    showHp: () => void;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp () {
        console.log(`Puntos de vida ${strider.hp}`)
    }
}

const heal = ( character: Character, amount:number ) => {
    character.hp += amount;
}

strider.showHp();
heal(strider, 25);
strider.showHp();