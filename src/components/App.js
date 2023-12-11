
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let[val,setVal]=useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Enter your name: </h1>
        <input type="text" onInput={(event)=>setVal(event.target.value)}/>
        {val ? <p>Hello {val}!</p>:""}
    </div>
  )
}

export default App
