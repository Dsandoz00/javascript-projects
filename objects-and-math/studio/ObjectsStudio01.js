// Code your selectRandomEntry function here:
let randomIdArr = [];
function selectRandomEntry(arr){
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
//This function selects random datat from an empty array 

//This function makes it so that there is a random number selected from the array 0 to 1 but rounding to the nearet integer + the length of the array
let emptyRandomArr = [];
while (emptyRandomArr.length < 3) {
  let idCheck = selectRandomEntry(idNumbers);
  if (!emptyRandomArr.includes(idCheck)) {
    randomIdArr.push(idCheck);
  }
}
//This loop is making sure that each number is a unique number every time it is randomly selected

// Code your buildCrewArray function here:

function buildCrewArray(emptyRandomArr, animals){
let crew = [];
for (let i = 0; i < 3; ++1) {
  if (emptyRandomArr.includes(animals[i].idCheck)) {
    crew.push(animals[1]);
  }
}
return crew;
}



let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

console.log(`${crew[0].name}, ${crew[1].name} and ${crew[2].name} are going to space! `);
