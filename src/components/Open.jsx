import React from "react";



const Open = ({flag,setFlag})=>{

    if(!flag){
        return null
    }

function isClose(){
setFlag(false)
}

    return (
        <div onClick={isClose} style={{border:"2px solid black", width :"300px" , padding:"20px" }} >
        <button style={{backgroundColor:"red", border:"none",}} >Button</button>
<p>This is the content of Model</p>
        </div>
    )
}

export default Open