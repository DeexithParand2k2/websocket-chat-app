//no need to require, already contains native object called WebSocket
import React, { useState } from 'react'

const ws = new WebSocket('ws://localhost:9706/websocketOne')

function App() {

  const [bool,changeBool] = useState('false')
  const [name,changeName] = useState('anonymous')

  const [but,changeBut] = useState(true)
  const [triggerDisplay,changeTriggerDisplay] = useState(false)

  ws.onmessage = (event) =>{
    try{
      const newObj = JSON.parse(event.data)
      changeBool(true)
      changeName(newObj.name)
    }
    catch(e){
      changeBool(false)
      changeName(e.message)
    }
  }

  const trigger = () =>{
    changeTriggerDisplay(!triggerDisplay)
    changeBut(!but)
  }

  return (
    <div className="App">
      <button onClick={()=>{trigger()}}>{but===true ? 'show' : 'hide'}</button>
      { triggerDisplay &&
            <>
              <h2>Name:</h2><h4>{name}</h4> 
              { bool===true ? <p>received</p> : <p>someError</p> }
            </> 
      }
    </div>
  );
}

export default App;
