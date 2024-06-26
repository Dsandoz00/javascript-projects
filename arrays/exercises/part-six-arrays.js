//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [
    ['hydrogen', 'H', 1.008],
    ['helium', 'He', 4.003],
    ['iron', 'Fe', 55.85]
];

console.log(table.push[0][3]('element'));
console.log(table.push[1][3]('element2'));
console.log(table.push[2][3]('element26'));

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1], table[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2]);
console.log(table[1][1]);
console.log(table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let table = [
    ['hydrogen', 'H', 1.008];
    ['helium', 'He', 4.003];
    ['iron', 'Fe', 55.85];
];

let newtable = [
    ['bananas', 'Ban', 2.002];
    ['kale', '11','1.045'];
    ['mango', '13', '1.310'];
];
