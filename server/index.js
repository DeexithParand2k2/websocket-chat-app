//any change on server side has to reloaded for the request to occur...
//... with changes made on server side
const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port : 9706
})

//to print in shell that server is reloaded and on
console.log('server is on')


//first count of clients getting connected
global.clientCount = 0;

//array of clients
global.clientList = []

//connection between socket and socket sever is on
wss.on('connection',function(ws){

    console.log('new client connected')
    clientCount++;

    ws.onclose = (event) =>{
        console.log('client disconnected')
        clientCount--;
    }

    ws.onmessage = (event) =>{
        const {data} = event
        clientList.push(data)
        ws.send(JSON.stringify(clientList))
    }

    console.log('final client count : '+clientCount)
})