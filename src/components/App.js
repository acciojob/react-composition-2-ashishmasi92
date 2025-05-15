
import React, { useState } from "react";
import './../styles/App.css';
import Open from "./Open";
const App = () => {
let [isOpen,setIsOpen] = useState(false)



  return (
    <div>
       
<button onClick={()=>{
  setIsOpen(true)
}}>Show Model</button>


<Open 
flag ={isOpen}
setFlag = {setIsOpen}
/>
    </div>
  )
}

export default App
