import React from 'react'
import Main_logo from '../images/Main_logo.svg';
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='editor'>
            <div className="Dashboard_conatiner">
            {/* <img src={Main_logo} alt="" className="Logo_image" /> */}
            <h1>Note Maker</h1><br/>
            <p>The Note Maker is a web application made by team “THE PROgrammer” for students so that they can make notes faster and can share with their friends for helping each other and developing learning enviroment among their friends .</p><br />

            <h2><strong>Features</strong></h2><br />
             <ul>
                 <li>1. You can share with other with link.</li>
                 <li>2. Can Make notes and store in a well arrnaged manner.</li>
                 <li>3. Facility of updating notes for future and text formating</li>
                 <li>4.Can read notes of yours friends to.</li>
             </ul><br />
              <p>so what are you waiting for <strong>Get Stated !</strong></p>

              <div className='submit_options'>
             {/* <Link to='/signIn'  > Sign Up</Link>  */}
            <button> <Link to='/signIn'>Sign Up</Link> </button>
            <button> <Link to='/login'> Log In</Link> </button>
            </div>


            </div>
            
        </div>
    )
}

export default Dashboard
