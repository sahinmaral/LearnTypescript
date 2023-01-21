// Primitive variables

let greetings: string = "Hello world";
let myNumber: number = 20;
let statementExample: boolean = 10 > 2 && 10 < 2;

console.log(greetings);
console.log(myNumber);
console.log(statementExample);

// Gives error

//greetings.toLowercase()
//myNumber.toLowerCase()


// any

let hero: string;

function getHero(priority:number):string{
    switch (priority) {
        case 1:
            return "Iron Man"
        case 2:
            return "Captain America"
        case 3:
            return "Scarlet Witch"
        default:
            return "Winter Soldier"
    }
}

hero = getHero(1)




export {};
