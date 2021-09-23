import React from 'react';
import {Link} from 'react-router-dom';

const signIn = () => {
    return (
        <div className="editor">
            <div className="sigin_card">
            <h1>Sign In </h1>
             
             <form>
                 <div>Username : <input type='text' placeholder='Enter Namae'></input> </div>
                 <div> Email : <input type='text' placeholder='Enter email id '></input></div>
                  <div>Password : <input type='text' placeholder='Enter password  '></input></div>
                  {/* <div>Conform Password : <input type='text' placeholder='Conform password  '></input></div> */}
             </form>
                  <button>Submit</button>
                  <Link to='/logIn'  style={{backgroundColor:"transparent",display:"flex",justifyContent:'center'}}>Already have a account ?</Link>
                 
                 

            </div>
             
              
        </div>
    )
}

export  default signIn;
