let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random() * 11)},
   animalReport: crewReports() {
      return (`'${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.'`);
   }
};

//Fill in the blanks with the name, species, age, mass, and ID for the selected animal.//

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random() * 11)}
   animalReport: crewReports() {
      return (`'${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.'`);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random() * 11)}
   animalReport: crewReports() {
      return (`'${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.'`);
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random() * 11)}
   animalReport: crewReports() {
      return (`'${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.'`);
};

let waterbear = {
   name:"Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random() * 11)}
   animalReport: function crewReports() {
      return (`'${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.'`);
};

let crew = ["superChimpOne", "salamander", "superChimpTwo", "dog", "waterbear"];

function fitnessTest(candidates) {
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++) {
      numSteps = 0;
      turns = 0;
      while(numSteps < 20){
         numSteps +=candidates[i].move();
         turns++;
         }
         results.push(`${candidates[i].name} took ${turns} turns to take 20 steps. `);
   }
   return results
   }
}



// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
