function updateEntry(data) {
    try {
        document.getElementById('results').innerHTML = `
            Agreement: ${data.agreement},
            Subjectivity: ${data.subjectivity},
            Confidence: ${data.confidence},
            Score tag: ${data.score_tag},
            Irony: ${data.irony}
            `;
    }
    catch(error) {
        console.log(errorMsg);
    }
};

export { updateEntry }

function errorMsg(error) {
    return `An error ocurred while updating the UI: ${error}`;
}

export { errorMsg }