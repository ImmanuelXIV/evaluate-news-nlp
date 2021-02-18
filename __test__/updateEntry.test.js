// Import the js file to test
import { TestScheduler } from "jest";
import { errorMsg } from "../src/client/js/updateEntry"

describe('testing parts of the updateEntry() function', () => {
    test('test errorMsg() function', () => {
        // test if error message is returned correctly
        const solution = `An error ocurred while updating the UI: Test`;
        expect(errorMsg("Test")).toEqual(solution);
    });
})