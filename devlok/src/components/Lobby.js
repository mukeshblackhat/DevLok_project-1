import React , {useEffect, useState } from 'react';
import parse from 'html-react-parser';
import edit from '../images/edit_button_svg.svg';



const Lobby = () => {
    const[notes,setNotes]=useState([ ]);
    const[admin, setAdmin]=useState([]);

     
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

        //  notes fetching 
         fetch("http://localhost:4001/note/allSaved").then(res=>{
             if(res.ok){
                 return res.json()
             }
         }).then(jsonRes=>{setNotes(jsonRes)});


        //  admin fetching
        //  fetch("http://localhost:3001/signIn").then(res=>{
        //      if(res.ok){
        //          return res.json()
        //      }
        //  }).then(jsonRes=>{setAdmin(jsonRes)});
       
    } )
    return (
        <div className='editor'>

            <h3>My name is Lobby</h3><br/>
            
            
             
             <div className="Lobby_container" >
             <p>this is the area where you can find all of your notes . So don't worry just keep learning we keep your data safe for you</p>
                     {notes.map( (note,admin)=>{
             return <div className="Note_output_box">  
              <h3>{note.topic}</h3>
              <p><i>{note.subject} <button className="more_button" onClick={More_action}>.....more</button></i></p>
                
              {/* {parse(note.written)} */}
              <p className="author_name_lobby"><stong>BY :{note.author}</stong></p>
              <button className="edit_button"><img src={edit} alt="eidt_button"  /></button>
              </div>
            }
            )}
               </div>
           
           
            


             
            
        </div>
    )
}
export default Lobby;
