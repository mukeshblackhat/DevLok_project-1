// import Note from "../../../models/noteModule";
import React , {useEffect, useState } from 'react';
import parse from 'html-react-parser';



const Lobby = () => {
    const[notes,setNotes]=useState([ ]);

     
    const[load,setLoad]=useState({
        loading:true,
    })

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

            <h1>My name is Lobby</h1>
            
             
             <div>
                     {notes.map( (note)=>{
             return <div>  
              <h1>{note.title}</h1>
              <h2>{note.subject}</h2>
              <p>{note.written }</p>
              </div>
            }
            )}
               </div>
           
           
            


             
            
        </div>
    )
}
export default Lobby;
