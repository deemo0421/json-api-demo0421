import React from 'react';
import './navbar.css';

function Navbar({setlist}){
     
    function showAllList() {
        setlist(1) //origin listS
    }
    
    function showCompleted() {
        setlist(2) //completed list
    }
    
    function showNotCompleted() {
        setlist(3)  // not completed list
    }
    return(
        <div className="nav">
        <button type="button" onClick={showAllList}>全部</button>
        <button type="button" onClick={showCompleted}>已完成</button>
        <button type="button" onClick={showNotCompleted}>未完成</button>
    </div>
    )   
}
export default Navbar;