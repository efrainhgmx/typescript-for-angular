export interface Passenger {
    name: string;
    childen?: string[];
}

const passOne: Passenger = {
    name: 'Efrain'
}

const passTwo:Passenger = {
    name: 'Lizeth',
    childen: ['Melissa', 'Lola']
}

const printChildren = ( passanger: Passenger ) => {
    //const howManyChildren = passanger.childen!.length;
    const howManyChildren = passanger.childen?.length || 0;

    console.log(passanger.name, howManyChildren);
}

printChildren(passTwo);
printChildren(passOne);