function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    /*
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
        }
    )
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
    */

    // make request to server via /getSentiment (server does API request)    
    Client.postData('http://localhost:8081/getSentiment', {text: formText})
    .then(function(data) {
        Client.updateEntry(data)
    });

}

export { handleSubmit }
