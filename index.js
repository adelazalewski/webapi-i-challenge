// implement your API here
// require the express npm module, needs to be added to the project using "npm install express"
const express = require('express');

// creates an express application using the express module
const server = express();
server.use(express.json());

//get list of users by usiong the db.js
const listOfUsers = require('./data/db.js');
server.get('/users',async (req, res) => {
const users = await listOfUsers.find();
if(!users){
    return res.status(500).json("something went wrong. no users have been found");
}else{
    return res.status(200).json(users);
}
})
// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"
server.get('/', (req, res) => {
  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
  res.send('Hello World');
});
//define our endpoint READ data
server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 1,
            name: 'Samwise Gamgee'
        },
        {
            id: 2,
            name: 'Frodo Baggins'
        }
    ];

    res.status(200).json(hobbits);
})
//create data
server.post('/hobbits'), (req, res) => {
    res.status(201).json({url: '/hobbits', operation: 'POST'});
}
//UPDATE data
server.put('/hobbits', (req, res) => {
    res.status(200).json({url: '/hobbits', operation: 'PUT'});
})
//DELETING DATA
server.delete('/hobbits', (req, res) => {
    res.sendStatus(204);
})
// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(8000, () => console.log('API running on port 8000'));