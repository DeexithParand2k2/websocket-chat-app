//
import React, { useState } from 'react'

//const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:9706/websocketOne')

function App() {

  ws.onopen = () =>{
    //ws.send('request new one')
    
    ws.onmessage = (event) =>{
      ws.send('just another response for git')
      changeMessage(event.data)
    }

    // Events another way of handling
    // ws.addEventListener('message', (event) => { 
    //   changeMessage(event.data)
    // })

  }

  const [message,changeMessage] = useState('')

  //on open connection listens to get message from server
  // ws.onmessage = (event) =>{
  //   changeMessage(event.data)
  // }

  return (
    <div className="App">
      <p>
        <b>Message : </b>
        <br></br>
        client side: {message}
      </p>
    </div>
  );
}

export default App;
