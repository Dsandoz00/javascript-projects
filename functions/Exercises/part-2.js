function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < heightl; i++) {
        stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1)
    console.log(makeDownwardStairs(5));
}


function makeSpaceLine(numSpaces, numChars) {
    let spaces = '';
    for (let i = 0; i < numSpaces, numChars; i++) {
        spaces += (numSpaces(i) + numChars + '\n')
    }
    return (0, 1)
}
    console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
    console.log(makeIsoscelesTriangle(5));
}