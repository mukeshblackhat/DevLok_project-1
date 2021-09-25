import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// const querystring = require('querystring');
import querystring from 'querystring';
const Login = () => {
    const[details,setDetails]=useState({
        email:'',
        password:'',
    });
    const[token , setToken]=useState('')
    const handleChange = (event)=>{
        const {name,value} =event.target;
        setDetails(prevInput=>{
                return{
                    ...prevInput,
                    [name]:value 
                }
            }
        )

    };
    const handlesubmit= (event)=>{
        event.preventDefault();
        console.log(details.email);
        console.log(details.password);

        const  newUserDetail ={
            "email":details.email,
            password:details.password,
         }
        axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url:'http://localhost:4001/al/login',
            data: newUserDetail
        })
        
        .then((response) => { 
            setToken(response.data.accessToken);
            localStorage.setItem('accessToken',JSON.stringify(response.data.accessToken));
            console.log(response.data)})
        .catch((error) => error.response);

        setDetails({  email:'',
        password:'',});
         
         
     }
    
    return (
        <div className="editor">
 
            <div className="sigin_card">
            <h1>Log In  </h1>
             
             <form>
                 <div> Email : <input type='text' name ='email'onChange={handleChange} value={details.email} placeholder='Enter email id '></input></div>
                  <div>Password : <input type='text' name='password' onChange={handleChange} value={details.password} placeholder='Enter password  '></input></div>
             </form>
                  <button onClick={handlesubmit}>Submit</button>
                  <Link to='/signIn' style={{backgroundColor:"transparent",display:"flex",justifyContent:'center'}}>Don't have a account ? Want to make One !</Link>
                 
                 

            </div>
            
        </div>
    )
}

export default Login;
