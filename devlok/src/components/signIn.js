import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const[admin,setAdmin]=useState({
        username:'',
        email:'',
        password:'',
    });
    const handleChange = (event)=>{
        const {name,value} =event.target;
        setAdmin(prevInput=>{
                return{
                    ...prevInput,
                    [name]:value 
                }
            }
        )

    };
    const handlesubmit= (event)=>{
        event.preventDefault();
        console.log(admin.username);
        console.log(admin.email);
        console.log(admin.password);
       
        const  newAdmin ={
           username:admin.username,
           email:admin.email,
           password:admin.password,
        }
        axios.post('http://localhost:3001/signIn', newAdmin)
     }
    return (
        <div className="editor">
            <div className="sigin_card">
            <h1>Sign In </h1>
             
            <form>
                 <div>Username : 
                     <input 
                     type='text' 
                     name='username'
                     onChange={handleChange} 
                     value={admin.username} 
                     placeholder=' Enter Namae '>
                     </input> 
                </div>
                 <div> Email : 
                     <input 
                     name='email'
                     type='text' 
                     value={admin.email} 
                     onChange={handleChange} 
                     placeholder='Enter email id '>
                     </input>
                 </div>
                 <div>Password : 
                     <input 
                     name='password'
                     type='text' 
                     value={admin.password} 
                     onChange={handleChange} 
                     placeholder=' Enter password '>
                     </input>
                 </div>
            </form>
            <button onClick={ handlesubmit}>Submit</button>
            <Link to='/logIn'  style={{backgroundColor:"transparent",display:"flex",justifyContent:'center'}}>Already have a account ?</Link>
                 
                 

            </div>
             
              
        </div>
    )
}

export  default SignIn;
