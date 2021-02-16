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

/*
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
*/
