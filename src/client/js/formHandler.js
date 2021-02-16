function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Check if formText is alphanumeric
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
        alert("Only alphanumeric signs are permitted.")
    }

}

export { handleSubmit }

const isValid = function(text) {
    // only alphanumeric characters
    const regEx = /^[\w\-\s]+$/;
    return regEx.test(text);
}