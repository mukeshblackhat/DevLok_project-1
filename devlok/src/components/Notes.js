import React,{useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import tick from '../images/tick.svg';
import share from '../images/share.svg';
import parse from 'html-react-parser';
import axios from 'axios';


const Notes = () => {
    const[content,setContent]=useState({
        title:'',
        subject:'',
        written:'',
    });
    const onNOte= (event,editor)=>{
        const data=editor.getData()
        setContent({written:data});//yha sting likha ha data ki jagah const ke aage bhi aur written ke sath bhi 
        // console.log(content.written);
    }
    const onHeading= (event)=>{
        const {name,value} =event.target;
        setContent(prevInput=>{
                return{
                    ...prevInput,
                    [name]:value 
                }
            }
        )
        };
    const handleClick= (event)=>{
            event.preventDefault();
            console.log(content.title);
            console.log(content.subject);
            console.log(content.written);
            const  newNote ={
               title:content.title,
               subject:content.subject, 
               written:content.written,
            }
            axios.post('http://localhost:3001/notes', newNote)
         }
       
    
   
    return (

        <div className='editor'>
            <h1>Notes</h1>
            <div>
            <div><span> Topic :</span> <input name="title" type="text" onChange={onHeading} value={content.title} placeholder='Topic of Notes'  /></div>
            <div><span> Subject :</span><input name="subject" type="text" onChange={onHeading} value={content.subject} placeholder='Brief of content'  /></div>
            </div>
            <CKEditor
             editor={ClassicEditor}
             data={content.written}
             onChange={onNOte}
            /> 
            <div className='submit_options'>
            <button onClick={handleClick}><img src={tick} alt=''/>Submit</button>
            <button><img src={share} alt=''/>Share</button>
            </div>
            <p className='output'>{parse(content.written)}</p>
        </div>
    )
}

export default Notes
