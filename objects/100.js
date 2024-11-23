// Predict and explain...
// What will be logged by this code?
// Check your prediction and explanation by running the code.


// 

const person1 = {
    "name": "Abdi",
    "location": "London",
    "id_number": 17,
};

const person2 = {
    "name": "Shadi",
    "job": "Software Engineer",
    "location": "London",
    "id_number": 28,
};

const person3 = person2;

person3.location = "Manchester";

console.log(person1.name); // Abdi
console.log(person2["name"]); // Shadi
console.log(person1.id_number > person2["id_number"]); // false
console.log(person1.job);// undefined
console.log(person1.location === person2.location);// false
console.log(person1.location === person3.location);// false
console.log(person2.location === person3.location);//true because person3.location can be changed despite
