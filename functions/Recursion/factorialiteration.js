function factorialIteration(integer) {
    let answer = 1;

    for (let loop = 1; loop <= integer; loop++) {
        answer *= loop;
    }
    
    return answer;
}

function factorial(integer) {
    if (1 <= integer/* replace this with base case*/){
        // solve last step
        return 1;
        // end the recursion by returning something
    } else {
       // call factorial function again
       factorialIteration(integer);
       // also need to add something as well.
    }
};


console.log(factorialIteration(4));
// console.log(factorial(4));