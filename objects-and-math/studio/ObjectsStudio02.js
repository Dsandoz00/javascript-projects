// Code your orbitCircumference function here:
orbitCircumference (radius); {
  return Math.round(2 * Math.PI * radius);
}
//This allows me to get a return of C = 2PI

// Code your missionDuration function here:
missionDuration (orbits, radius = 2000, speed = 28000); {
  let circumference = orbitCircumference(radius);
  let time = (orbits * circumference) / speed;
  return time.toFixed(2);
}
console.log(`'The mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration} hours to complete.'`)
//This function uses a precise measurement of orbits, radius, and speed in order to calculate the missionduration

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr){
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}


// Code your oxygenExpended function here:
oxygenExpended (candidateA, radius = 2000, speed = 28000); {
  let timeForMission = missionDuration(3, radius, speed);
  let oxygenConsumed = candidateA.o2Used(time);
  return `${candidateA.name} will perform the spacewalk, which will last ${time} will perform the spacewalk, which will last ${oxygenConsumed.toFixed(3)} kg of oxygen.`
}
//This function takes a candidate and test them to get the data based off of their qualities and the parameters of the mission


// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 