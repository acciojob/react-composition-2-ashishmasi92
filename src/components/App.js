
import React, { useState } from "react";
import './../styles/App.css';
import Open from "./Open";
const App = () => {
let [isOpen,setIsOpen] = useState(false)

function handleOverlayClick(e) {
    // Only close modal if the overlay itself is clicked, not the modal content
    if (e.target === e.currnetTarget) {
      isClose();
    }
  }

  return (
    <div  className="model-overlay" >
       
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
