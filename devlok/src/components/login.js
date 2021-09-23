import React from 'react';
import {Link} from 'react-router-dom';

const login = () => {
    
    return (
        <div className="editor">
 
            <div className="sigin_card">
            <h1>Log In  </h1>
             
             <form>
                 <div> Email : <input type='text' placeholder='Enter email id '></input></div>
                  <div>Password : <input type='text' placeholder='Enter password  '></input></div>
             </form>
                  <button>Submit</button>
                  <Link to='/signIn' style={{backgroundColor:"transparent",display:"flex",justifyContent:'center'}}>Don't have a account ? Want to make One !</Link>
                 
                 

            </div>
            
        </div>
    )
}

export default login;
