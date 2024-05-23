function makeDiamond(height) {
    let diamond = '';
    for (i = 0; i < height; i++) {
        diamond += (makeDiamond(height - i - 1, 2*i + 1) + '\n');
    }
    return diamond.slice(0, -1);
    console.log(makeDiamond(5))
}

function reverse(diamond) {
    let reverse = '';

    for (let i = 0; i < diamond.length; i++) {
        reversed = ddiamond[i] + reversed;
    }
    return reversed;
}