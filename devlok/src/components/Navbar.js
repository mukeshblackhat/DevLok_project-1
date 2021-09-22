import React from 'react';
import Main_logo from '../images/Main_logo.svg';
import Dashboard from '../images/dashboard.svg';
import notes from '../images/speaker_notes.svg';
import  lobby from '../images/collections_bookmark.svg';
import resources from '../images/folder_shared.svg';
import cartoon from '../images/cartoon.svg';
import avatar from '../images/avatar.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<div className="navbar">
           
           <div className="navbar_container">
            <div className="Main_logo">
            <img src={Main_logo} alt="" className="Logo_image" /><p>Note Maker</p>
            </div>
            <Link to="/" > <img src={Dashboard} alt="Dashboard" className="component_images"/>Dashboard</Link>
            <Link to="/notes"> <img src={notes} alt="Notes"className="component_images"/>Notes</Link>
            <Link to="/Lobby"> <img src={lobby} alt="Lobby"className="component_images"/>Lobby</Link>
            <Link to="/Resources"> <img src={resources} alt="Resources"className="component_images"/>Resources</Link>
            <img src={cartoon} alt="" className='cartoon'/>
            <a href="" className="signIn_logo"> <img src={avatar} alt="Dashboard" className="component_images" />Sign In</a>
        </div>

        <div className="navbar_phone" >
            <Link to="/" className="Phone_nav_button"> <img src={Dashboard} alt="Dashboard" className=""/></Link>
            <Link to="/notes" className="Phone_nav_button"> <img src={notes} alt="Notes"className=""/></Link>
            <div className="round_logo Phone_nav_button">
            <img src={Main_logo} alt="" className="Logo_image" />
                </div>
            <Link to="/Lobby" className="Phone_nav_button"> <img src={lobby} alt="Lobby"className=""/></Link>
            <Link to="/Resources" className="Phone_nav_button"> <img src={resources} alt="Resources"className=""/></Link>
        </div>
    </div>
        
    )
}

export default Navbar
