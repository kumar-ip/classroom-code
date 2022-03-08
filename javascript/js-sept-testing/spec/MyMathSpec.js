const findLargest = require('../lib/MyMath.js');

describe("Math Library: ", function() {

    describe("findLargest", function() {

        beforeAll(function() {
            console.log("beforeAll");
        });

        beforeEach(function() {
            spyOn(findLargest, 'findLargest');
            console.log("beforeEach");
        });

        it("Positive Numbers", function() {
            let result1 = findLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            expect(result1).toBe(10);
            //expect(findLargest).
        });
    
        it("One Number", function() {
            let result1 = findLargest([1]);
            expect(result1).toBe(1);
        });
    
        it("Negative numbers", function() {
            let result1 = findLargest([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]);
            expect(result1).toBe(-1);
        });

        afterEach(function() {
            console.log("afterEach");
        });

        afterAll(function() {
            console.log("afterAll");
        });

    });

    

});