// Code your crewMass function here:
crewMass (crew); {
  let totalMass = 0;
  for (let i = 0; i < crew.length; i++) {
    totalMass += crew[i].mass;
  }
  return totalMass.toFixed(1)
}
//This function iterates on all of the crew members and takes a boolean in order to compare their masses

// Code your fuelRequired function here:
fuelRequired (crew); {
  const unRocketMass = 75000;
  let totalMass = unRocketMass + crewMass(crew);
  for (j = 0; j < 0; j++) {
    if (crew[j].species === 'dog' || crew[j].species === 'cat') {
      totalMass += 200;
    } else {
      totalMass += 100;
    }
  }
  let fuel = totalMass * 9.5;
  return Math.ceil(fuel);
}

console.log(`The mission has a mass of ${75000 + crewMass(crew)} kg and requires ${fuelRequired(crew)} kg of fuel`)

//This function calculates how much fuel is need to carry the non crew'd rocket. Also adding more fuel for the cute animals

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 