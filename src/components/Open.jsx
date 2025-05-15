import React from "react";



const Open = ({flag,setFlag})=>{

    if(!flag){
        return null
    }

function isClose(){
setFlag(false)
}

    return (
        <div  className="modal-content" onClick={isClose}  style={{border:"2px solid black", width :"300px" , padding:"20px" }} >
        <button className="model-close " onClick={isClose} style={{backgroundColor:"red", border:"none",}} >Button</button>
<p className="model-p">This is the content of Model</p>
        </div>
    )
}

export default Open