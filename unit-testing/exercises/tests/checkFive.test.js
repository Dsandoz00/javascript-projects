const checkFive = require('../checkFive.js');
const test = require('../checkFive.js');

describe("checkFive", function(){
    
    test("DETAILED message...", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
});