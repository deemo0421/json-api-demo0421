import React from 'react';
import Item from './item';


//list
const List = ({listData,templist,completedlist,notcompletedlist,listnum,deleteData,changedata}) =>{
    // to  change list data
    if (listnum === 1){
        templist = listData 
    } 
    else if (listnum === 2){
        templist = completedlist 
    }
    else{
        templist = notcompletedlist 
    }
    return(
        <div>
            {   
                templist.map((item) =>{
                    const {note,id,completed} = item
                    return (
                    <Item 
                        key={id}
                        id={id}
                        note={note} 
                        completed={completed}
                        deleteData={deleteData}
                        changedata={changedata}
                    />
                    );
                })     
            }
        </div>
    ); 
}

export default List;