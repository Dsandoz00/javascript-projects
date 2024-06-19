const test = require('../RPS.js');

describe ("whoWon", function(){

    test("returns 'Player 1 and 2 win!' if P1 = rock & P2 = rock", function(){
        let output = test.whoWon('rock', 'rock');
        expect(output).toBe("Both players win!")
    });
    //In the first test I tested as if both players won 
    test("returns 'Player 1 win!' if P1 = rock & P2 = paper", function(){
        let output = test.whoWon('rock', 'paper');
        expect(output).toBe("Player 1 wins!")
    });
    //In the second test I tested as if P1 won by choosing rock
    test("returns 'Player 1 win!' if P1 = scissors & P2 = rock", function(){
        let output = test.whoWon('scissors', 'rock');
        expect(output).toBe("Player 1 wins!");
    })
    //In the third test I tested as if P1 won by choosing scissors
} )


