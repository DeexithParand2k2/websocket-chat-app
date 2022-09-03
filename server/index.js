//any change on server side has to reloaded for the request to occur...
//... with changes made on server side
const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port : 9706
})

//to print in shell that server is reloaded and on
console.log('server is on')


//some json object
const obj = {
    name: 'username',
    internId: 007,
}

//my name
const obj2 = {
    name: 'myName',
    internId: 007,
}


//connection between socket and socket sever is on
wss.on('connection',function(ws){
    //ws.send(JSON.stringify(obj2))
    ws.send(JSON.stringify(obj))
    //ws.send('not a json object')
    console.log('new connection on')
})