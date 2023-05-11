// Running node allows you to open a terminal, type in 'node 'file name'' and it will run the code shown below
//console.log('Hello World')

// Running console.log(process.platform) will print the platform you are using to run at the moment ex. windows
//console.log('Using: ' + process.platform)

// Run a callback function using event emitter. Meaning that it requres a call to print out something
//const { EventEmitter } = require('events');
//const eventEmitter = new EventEmitter();
    // Using the on function means that you are setting up a trigger word in this case 'lunch'
    //eventEmitter.on('lunch', () => {
        // The following statement is what will be printed when triggered
        //console.log('yummy')
    //})
    //Trigger the event to occur
    //eventEmitter.emit('lunch');

// Call information from a txt file
// Whenever a function that ends in sync it will need to finish all the work before moving on 'sync=blocking'
//const {readFile, readFileSync} = require('fs');
//const txt = readFileSync('./hello.txt', 'utf8');
//console.log(txt)
//console.log('do this ASAP')

//Use a callback function to stop the blocking
//readFile('./hello.txt', 'utf8', (err, txt) => {
    //console.log(txt)
//});
//console.log('do this ASAP')

// Create a variable for the my-module.js
// Require is used as a way to import
//const myModule = require('./my-module');
//console.log(myModule)

// Create variables to handle the requests
const express = require('express');
const app = express();
const {readFile} = require('fs');
// make a get request
// you will put the url that the user will be receiving data from
app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err){
            response.status(500).send('sorry, out of order')
        }
        response.send(html);
    })
});
// This code will listen to 
app.listen(process.env.Port || 3000, () => console.log('App available on http://localhost:3000'))

// Using promises
// first add promises to the variable readFile
//const{readFile} = require('fs').promises;
// Make the callback function async
//app.get('/', async(request, response) => {
    //response.send(await readFile('./home.html', 'utf8'));
//})