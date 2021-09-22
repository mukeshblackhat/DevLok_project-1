import React , {useEffect, useState } from 'react';
import parse from 'html-react-parser';
import edit from '../images/edit_button_svg.svg';



const Lobby = () => {
    const[notes,setNotes]=useState([ ]);

     
    const[load,setLoad]=useState({
        loading:true,
    });
    const[more,setMore]=useState({
        More_option:false,
    })

    const More_action= ()=>{
        setMore({More_option:true,})
        
    }

       useEffect(() => {
         fetch("http://localhost:3001/Lobby").then(res=>{
             if(res.ok){
                 return res.json()
             }
         }).then(jsonRes=>{setNotes(jsonRes);
         setLoad({loading:false});
         console.log(notes);});
       
    } )
    return (
        <div className='editor'>

            <h3>My name is Lobby</h3><br/>
            
            
             
             <div className="Lobby_container" >
             <p>this is the area where you can find all of your notes . go don't worry just keep learning we keep your data safe for you</p>
                     {notes.map( (note)=>{
             return <div className="Note_output_box">  
              <h3>{note.title}</h3>
              <p><i>{note.subject} <button className="more_button" onClick={More_action}>.....more</button></i></p>
                
              {/* {parse(note.written)} */}
              <p className="author_name_lobby"><stong>BY : User_Name</stong></p>
              <button className="edit_button"><img src={edit} alt="eidt_button"  /></button>
              </div>
            }
            )}
               </div>
           
           
            


             
            
        </div>
    )
}
export default Lobby;
