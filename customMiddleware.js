

server.use(function (req, res) {
res.status(404).send(`ain't nobody got time for that!`);
});
//put this just before the server.listen
//order of operations matters 


//logger middleware
function logger(req, res, next) {
console.log(`[[${new Date().toISONString()}] ${req.method} to ${req.url} ${req.get('Origin')}`);
next();
//if next is not called we are not getting any response back
}

//authentication middlwear
function atGate(req, res, next){
console.log('at the gate, about to be eaten');
next();
}

function auth(req, res, next){
if(req.url === '/mellon'){
next();
}else{
res.send('you shall not pass!');
}
}

server.use(logger);
server.use(atGate);

//implemnt a route
//plugin the middlwear you want to fire when the write route is hit
serve.get('/mellon', auth, (req, res) => {
console.log(('get opening....');
console.log('inside and safe!');
res.send('Welcome traveler!');
});


