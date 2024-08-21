/*
 * Son funciones especiales que se adjuntan 
 * a las clases 
 * 
 * Pero son funciones
 */

function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: any
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello: 'Override';
    }
    
}

@classDecorator
export class SuperClass {
    public myProperty: string = '1234';

    print() {
        console.log('Hello World');
    }
}


//!?Class definition
console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);