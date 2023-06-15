import React, {useState}from "react";



const Mohit=()=>{

    const [email,setEmail]= new useState('');

    const [password,setPassword]= new useState('');

    const [allEntry,setallEntry]= new useState([]);

    const submitForm=(e)=>{

        e.preventDefault();

        if(email && password)

        {

            const newEntry = {id:new Date().getTime().toString() ,email:email , password: password};



            setallEntry([...allEntry, newEntry]);

            // console.log(allEntry);

            setEmail("");

            setPassword("");

        }

        else

        {

            alert("Plzz fill data");

        }



       



    }

    return(

        <>

            <form action="" onSubmit={submitForm}>

                <div>

                    <label htmlFor="email">Email</label>

                    <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                </div>



                <div>

                    <label htmlFor="password">Password</label>

                    <input type="text" name="password" id="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                </div>



                <button type="submit">Login</button>



            </form>

            <div>

                {

                    allEntry.map((ele)=>{

                        // For Objectr Destructuring

                        const {id,email,password} = ele;

                        return (

                            <>

                            {/* <div key={ele.id}>

                                <p>{ele.email}</p>

                                <p>{ele.password}</p>

                            </div> */}



                            {/* For Object Destructuring */}

                            <div key={id}>

                                <p>{email}</p>

                                <p>{password}</p>

                            </div>



                            </>

                        )

                    })

                }

            </div>

        </>

    )

}



export default Mohit;




