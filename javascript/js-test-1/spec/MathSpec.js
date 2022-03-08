describe('Math Test Suite', function() {

    const getMostRepeatedLetter = require('../src/Math');
    let textFromFile = undefined;

    beforeAll(function(done) {
        console.log('This will run only one time in describe before running all it methods');
        const fs = require('fs');
        fs.readFile('../notes/note2.txt', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            textFromFile = data.toString();
            console.log('-------------------------------------------');
            console.log('-------------------------------------------');
            console.log(textFromFile);
            console.log('-------------------------------------------');
            console.log('-------------------------------------------');
            done();
         });
        
    });

    beforeEach(function() {
        console.log('This will run for before every it method');
    });

    afterAll(function() {
        console.log('This will run only one time in describe after running all it methods');
    });

    afterEach(function() {
        console.log('This will run for after every it method');
    });

    it('positive scenario', function() {
        let mostRepeatedLetter = getMostRepeatedLetter(textFromFile);
        expect(mostRepeatedLetter).toBe('D');
    });

    it('with no repetition', function() {
        let mostRepeatedLetter = getMostRepeatedLetter('ABC');
        expect(mostRepeatedLetter).toBe('A');
    });

    it('two most repeated letters', function() {
        let mostRepeatedLetter = getMostRepeatedLetter('ABBCC');
        expect(mostRepeatedLetter).toBe('B');
    });

    it('with object as param', function() {
        let mostRepeatedLetter = getMostRepeatedLetter({});
        expect(mostRepeatedLetter).toBe(undefined);
    });



});