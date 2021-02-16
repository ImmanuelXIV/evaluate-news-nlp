var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');

// Require MeaningCloud npm package
//var meaningCloud = require('meaning-cloud');


console.log(`Your process.env.API_Key is ${ process.env.API_Key }`);

dotenv.config();
/*
var textapi = new meaningCloud({
    application_key: process.env.API_Key
});
console.log(`Your API key is ${textapi}`);
*/

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// make API request
app.post('/getSentiment', function(req, res) {
    const text = req.body.text;
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_Key}
    &of=json&txt=${text}&model=general&lang=en`
    const data = await fetch(url);
    try {
        res.send(await data.json());
    }
    catch(error) {
        console.log(`An error occurred in server/index.js during API request: ${error}`);
    }
})
