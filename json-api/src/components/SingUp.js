import React, {useEffect, useState} from 'react';
import './SingUp.css';
import {Link,Redirect} from "react-router-dom";

function Data(props) {
    const [data, setData]=useState("")
    const name = props.name;
    const handleChange = props.handleChange;

    useEffect(()=>{
        if(data)
            handleChange(name, data)
    },[data])
    
    if (props.name == "暱稱") {
        return(
            <div className="singUpData">
                <span>{props.name}: </span>
                <input type="text" onChange={(e)=>{setData(e.target.value);}}/>
            </div>
        )
    } else if(props.name == "帳號"){
        return(
            <div className="singUpData">
                <span>{props.name}: </span>
                <input type="text" onChange={(e)=>{setData(e.target.value);}}/>
            </div>
        )
    }else{
        return(
            <div className="singUpData">
                <span>{props.name}: </span>
                <input type="password" onChange={(e)=>{setData(e.target.value);}}/>
                <span className="notice">
                    { (data.length)<8 ? props.notice : ""}
                </span>
            </div>
        )
    }
}

function SingUp(props){
    const[valid,setvalid]=useState(false);
    const[enrollId,setenrollId]=useState("")
    const[enrollAcc,setenrollAcc]=useState("")
    const[enrollPwd,setenrollPwd]=useState("")
    //註冊資料
    function handleChange(name, data){
        console.log([name + ":" + data])
        if (name == "暱稱") {
            setenrollId(data)
        } else if(name == "帳號"){
            setenrollAcc(data)    
        }else{
            setenrollPwd(data)
        }  
    }

    const dataList = props.name.map(value =>
        <Data key={value.name} name={value.name} notice={value.notice} handleChange={handleChange}/>)

    function checkEnrollData() {
        let num = props.accountdata.findIndex(data => data.account === enrollAcc)
        let validNum = 0;            
        //帳號驗證
        if (num !== -1) {
            alert("帳號已存在!")
            setvalid(false)
         }else if(enrollAcc == ""){
            alert("請輸入帳號!")
            setvalid(false)
         }
         //密碼驗證 1
        if(enrollPwd.match(/.*[A-Z]+/) ){
            validNum +=1;
            console.log(validNum);
        }else{
            alert("密碼需含有大寫英文字母");
        }
        //2
        if(enrollPwd.match(/.*[a-z]+/)){ 
            validNum +=1;
            console.log(validNum);
        }else{
            alert("密碼需含有小寫英文字母");
        }
        //3
        if(enrollPwd.match(/.*\d/)){ 
            validNum +=1;
            console.log(validNum);
        }else{
            alert("密碼需含有數字");
        }
        //4
        if(enrollPwd.length >= 8){ 
            validNum +=1;
            console.log(validNum);
        }else{
            alert("密碼需含至少8個字元");
        }
        //註冊
        if(validNum === 4 ){
            setvalid(true)
            alert("註冊成功!")
        props.accountdata.push({name:enrollId,account:enrollAcc,password:enrollPwd})
        } 
    }
    
    return(
        <div className="singUp">
            <div className="singUpTitle">
                <span>Sing Up</span>
                <button className="link" onClick={props.onClick}>
                    <Link className="linktext" to="/">已註冊</Link>    
                </button> 
            </div>
            {dataList}
            {valid? < Redirect from="/" to="/ToDoList" />
            :<button type="submit" className="sumbit" onClick={checkEnrollData}>送出</button>}
        </div>
    )
}

export default SingUp;
