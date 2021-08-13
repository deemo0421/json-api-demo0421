import React from 'react';
import './SingIn.css';
import {Link,Redirect} from "react-router-dom";
import { useState } from 'react';


function Data(props) {
    if(props.name == "帳號"){
        return(
            <div className="singInData">
                <span>{props.name} </span> 
                <input type="text" onChange={(e)=>{props.LoginInfo("acc",e.target.value)}}/>
                <br />
            </div>
        )
    }
    else{
        return(
            <div className="singInData">
                <span>{props.name} </span>
                <input type="password" onChange={(e)=>{props.LoginInfo("pwd",e.target.value)}}/> 
                <br />
            </div>
        )
    }
    
}


function SingIn(props){
    const[acc,setacc]=useState("")
    const[pwd,setpwd]=useState("")
    const[valid,setvalid]=useState(false);
    const dataList = props.name.map(value =>
        <Data key={value} name={value} LoginInfo={LoginInfo} />);
    
    function LoginInfo(info, value) {
        if(info === "acc")
        {setacc(value)}
        else
        {setpwd(value)}
    }    
    //登入驗證
    function handleClick(){ 
        let num = props.accountdata.findIndex(data => data.account === acc)
        if (num ==-1 ){
            setvalid(false)
            alert("請確認帳號密碼")
        }else if(props.accountdata[num].account == acc && props.accountdata[num].password == pwd) {
            setvalid(true)
            alert("登入成功")
        }else {
            setvalid(false)
            alert("請確認帳號密碼")
       }
    }
    
    return(
        <div className="singIn">
            <div className="singInTitle">
                <span>Sing In</span>
                <button className="link" onClick={props.onClick}>
                    <Link className="linktext" to="/SingUp">未註冊</Link>
                </button> 
            </div>
            {dataList}
            {valid? < Redirect from="/" to="/ToDoList" /> 
            :<button type="submit" className="sumbit" onClick={handleClick}>送出</button>}
        </div>
    )
}

export default SingIn;