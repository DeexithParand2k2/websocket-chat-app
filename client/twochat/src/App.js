//no need to require, already contains native object called WebSocket
import React, { useState } from 'react'

//next broadcast clients connected to the websocket server
//and also broadcast them exiting the server

const ws = new WebSocket('ws://localhost:9706/websocketOne')


function App() {

  const [user,changeUser] = useState('NIL')
  const [client,changeClient] = useState([])

  const newClient = () =>{
    ws.send(user)
  }

  ws.onmessage = (event) =>{
    changeClient(JSON.parse(event.data))
  }

  return (
    <div className="App">
      <input type='text' placeholder='username...' onChange={(e)=>changeUser(e.target.value)}></input>
      <button onClick={()=>{newClient()}}>new name</button>
      <>
        {client.map((eachClient)=> <p>{eachClient}</p>)}
      </>
    </div>
  );
}

export default App;
