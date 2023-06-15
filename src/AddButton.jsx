import React,{useState} from 'react';

// const buttonStyling={
//     padding:"10px",
//     fontWidth:"bolder",
//     border:"2px solid  #0d4374",
//     backgroundColor:"#5d91ed",
//     borderRadius:"5px",
//     margin:"10px"

// }
// const inputStyling={
//     margin:"10px",
//     padding:"10px",
// }
const AddButton=()=>{
    const [inputValue,setInputValue]=useState('');
    // const [data,setData]=useState('');
    const [arrData,setArrData]=useState([]);
   

    const addData=(e)=>{
        setInputValue(e.target.value);


    }
    const printData=(e)=>{
        e.preventDefault();
        // setData(inputValue);
        // arrData.push(inputValue);
        // setArrData(arrData);
        const arr={inputValue:inputValue};
        
        setArrData([...arrData,arr]);

    }

    return(
        <>
        <input type="text" placeholder='type something' value={inputValue} className='inputField' onChange={addData}></input>
        <button onClick={printData}>Add Data</button>
      { arrData.map((e,index)=>{
        return(
       <p style={{color:(index+1)%5===0 ? 'blue':'black'}}>{e.inputValue}</p>)
                
            
            })
      }
      

        </>
    )
}
export default AddButton;