import React from 'react';
import './item.css';

const Item = ({id,note,completed,deleteData,changedata}) =>{

    function deleteItem(){
        deleteData(function(prev){
            return prev.filter(item => item.id !== id);    
        })
    }

    function changeCompleted(){   
        changedata(function(prev){
            let num = prev.findIndex(item => item.id === id);
            let temp = prev
            temp[num].completed = !temp[num].completed
            console.log({temp})
            return ([...temp]);   
        });   
    }

    return(
        <div className="item">
            <input type="checkbox" onClick={changeCompleted} />
            <span>{note}</span>
            <button type="button">edit</button>
            <button type="button" onClick={deleteItem}>delete</button>
        </div>
    )
}
export default Item