function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Check if formText is valid ASCII sign
    if (isValid(formText)) {
        Client.checkForName(formText)

        console.log("::: Form Submitted :::")

        // make request to server via /getSentiment (server does API request)    
        Client.postData('http://localhost:8081/getSentiment', {text: formText})
        .then(function(data) {
            Client.updateEntry(data);
        });
    }
    else {
        console.log(`Text input is invalid. Only ASCII signs are permitted.`)
    }

}

export { handleSubmit }

const isValid = function(text) {
    const regEx = /^[\x00-\x7F]*$/;
    return regEx.test(text);
}