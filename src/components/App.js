
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let[val,setVal]=useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        {val ? <p>Hello {val}!</p>:<p>Enter your name:</p>}
        <input type="text" onInput={(event)=>setVal(event.target.value)}/>
        
    </div>
  )
}

export default App
