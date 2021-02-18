// Import the js file to test
import { TestScheduler } from "jest";
import { handleSubmit } from "../src/client/js/formHandler"

describe('testing the handleSubmit() function', () => {
    test('test handleSubmit() function calls', () => {
        expect(preventDefault()).toHaveBeenCalledTimes(1);
        expect(isValid()).toHaveBeenCalledTimes(1);
        expect(Client.postData()).toHaveBeenCalledTimes(1);
        expect(Client.updateEntry()).toHaveBeenCalledTimes(1);
    });
})