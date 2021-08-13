import React from 'react';
import './App.css';
import SingIn from './components/SingIn.js'
import SingUp from './components/SingUp.js'
import {BrowserRouter ,Switch,Route} from "react-router-dom";
import ToDoListComponent from './components/ToDoListComponent'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      singUp:[{name:"暱稱", nocice:""},{name:"帳號",notice:""}, {name:"密碼", notice:"請混合使用 8 個字元以上的英文字母、數字和符號"}],
      singIn:["帳號", "密碼"],
      accountdata:[{name:"YT",account:"WULAB",password:"123"}] //預設帳號
    };
  }

  
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <SingIn name={this.state.singIn} accountdata={this.state.accountdata} />
            </Route>
            <Route exact path="/SingUp">
              <SingUp name={this.state.singUp} accountdata={this.state.accountdata}/>
            </Route>
            <Route exact path="/ToDoList">
              <ToDoListComponent />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    
    );
  }
}

export default App;
