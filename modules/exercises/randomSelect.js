function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

module.exports = randomFromArray;
//I completed a function to randomly select data from an array for this quiz
//TODO: Export the randomFromArray function.
