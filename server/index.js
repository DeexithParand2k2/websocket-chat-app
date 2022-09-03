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
    name: 'deeski',
    internId: 073
}

//connection between socket and socket sever is on
wss.on('connection',function(ws){

    //emitting event
    ws.send('another test string')


    //listening from client
    // ws.on('message',function(event){
    //     console.log('received response from client')
    //     //ws.send('hello after installing nodemon and only if open')
    // })
    ws.onmessage = (event) =>{
        console.log('received response from client \'another way of listening\'')
    }

    //listening whether connection is open
    ws.on('open',function(){
        console.log('already connection is open')
    })

})