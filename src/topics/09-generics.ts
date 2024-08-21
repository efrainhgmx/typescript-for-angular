export function whatsMyType<T>( argument: T ): T {
    return argument;
}

const amIString = whatsMyType<string>('Hello World');
const amINumber = whatsMyType<number>(1234);
const amIArray = whatsMyType<number[]>([1,2,3,5]);


console.log(amIString.toUpperCase());
console.log(amINumber.toString())
console.log(amIArray.length);