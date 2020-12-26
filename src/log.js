
import { Component } from "react";

class Logged extends Component{
    constructor(props){
        super(props);
        this.state={
          isLogIn:false
        }
      }
    
    
     handleLogin=(e)=>{
        this.setState({
            isLogIn:true
        });
    }
     handleLogout=(e)=>{
        this.setState({
            isLogIn:false
        });
    }
    

  render(){
    let log=this.state.isLogIn
    if(log){
        this.greeting=<h1>Welcome Back :)</h1>;
        this.button=<button onClick={this.handleLogout}>Log out</button>
    }else{
        this.greeting=<h1>Pleaase Log in</h1>;
        this.button=<button onClick={this.handleLogin}>Log In</button>
    }
    return(
        <div>
            {this.greeting}
            {this.button}
        </div>
    );
  }
}

export default Logged;