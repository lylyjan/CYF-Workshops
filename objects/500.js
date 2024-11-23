// Fill in the code below so that the tests pass.

const people = [];

people.push({
    "name": "Saqib",
    "favourite_food": "salad",
});

people.push({
    "name": "Shadi",
    "favourite_food": "mango",
});

people.push({
    "name": "Navid",
    "favourite_food": "macarons",
});

const favouriteFoods = [people[0].favourite_food, people[1].favourite_food, people[2].favourite_food, ];

// TODO: Fill the array favouriteFoods with the favourite foods of each person.
// You must not type the strings (i.e. your solution should not involve you typing the word "salad").

console.log(favouriteFoods)

//now to assert
console.assert(favouriteFoods.length === 3);//true
console.assert(favouriteFoods.includes("salad")); //true
console.assert(favouriteFoods.includes("mango"));//true
console.assert(favouriteFoods.includes("macarons"));//true
