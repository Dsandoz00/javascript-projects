//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, nickname, age, mass,){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.nickname = nickname;
   }
}

let fox = new Astronaut('Fox', 7, 12, 'Foxy Mama');

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color, fox.nickname);

//Try modifying or adding properties below.

fox.favoriteColor = 'blue';
console.log(fox.nickname, fox.favoriteColor);