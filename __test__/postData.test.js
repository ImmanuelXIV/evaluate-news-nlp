// Import the js file to test
import { TestScheduler } from "jest";
import { postData } from "../src/client/js/postData"

describe('testing the postData function', () => {
    test('test if correct sentiment obj is returned from postData()', () => {        
        const sentObj = {
            Agreement: "AGREEMENT", 
            Subjectivity: "SUBJECTIVE", 
            Confidence: "100", 
            Score_tag: "P+", 
            Irony: "NONIRONIC"
        };

        const formText = "JavaScript is awesome";
        
        return postData('http://localhost:8081/getSentiment', {text: formText}).then(data => {
            data = {
                Agreement: data.agreement,
                Subjectivity: data.subjectivity,
                Confidence: data.confidence,
                Score_tag: data.score_tag,
                Irony: data.irony
            };
            expect(data).toEqual(sentObj);

        });
    });
})