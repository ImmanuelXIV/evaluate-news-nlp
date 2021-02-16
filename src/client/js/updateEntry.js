function updateEntry(data) {
    try {
        document.getElementById('results').innerHTML = `
        Agreement: ${data.agreement},
        Subjectivity: ${data.subjectivity},
        Confidence: ${data.confidence},
        Score tag: ${data.score_tag},
        Irony: ${data.irony},
        Text: ${data.sentence_list}
        `;
    }
    catch(error) {
        console.log(`An error ocurred while updating the UI: ${error}`);
    }
};

export { updateEntry }