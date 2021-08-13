import { nanoid } from 'nanoid';
import { useState } from 'react';
import './additem.css';

function Additem({add}){
    const[note,setnote] = useState("")
    
    function  newNote(e){
        setnote(e.target.value)
    }
    //console.log({note});
    
    function AddItem(){
        add(function(prevData){
            //onsole.log(prevData)
            return[
                ...prevData,
                {
                    id:nanoid(),
                    note,
                    completed:false
                }];
        });
    }
    return(
        <div className="inputitem">
            <input type="text" value = {note} onChange={newNote} />
            <button type="button" onClick={AddItem}>add</button>
        </div>
    );   
}
export default Additem;