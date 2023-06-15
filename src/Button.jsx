import React,{useState} from 'react';

const buttonStyling={
    padding:"10px",
    fontWidth:"bolder",
    border:"2px solid  #0d4374",
    backgroundColor:"#5d91ed",
    borderRadius:"5px"


}


const Button=()=>{
    const [flag,setFlag] = useState(false);
   

    return(
        <>
        <button  onClick={()=> setFlag(!flag)} style={buttonStyling}>Click Here</button>
        { flag && <p>I am Ayushi Gupta i am working as a TECHNICAL TRAINEE in GEMINI SOLUTION pvt limited</p>}
        
       </>
    )
    }
    export default Button;