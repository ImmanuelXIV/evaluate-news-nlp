// Import the js file to test
import { TestScheduler } from "jest";
import { isValid } from "../src/client/js/formHandler"

describe('testing parts of the handleSubmit() function', () => {
    test('test isValid() function', () => {
        // test if only aplhanumeric characters are used
        const correct = "Creative text to be tested";
        const wrong = "Creative text to be tested!!!";

        expect(isValid(correct)).toEqual(true);
        expect(isValid(wrong)).toEqual(false);

        // to test handleSubmit() create mock dom element
        // call handleSubmit with simulated click event
        // compare output with what you'd expect
    });
})