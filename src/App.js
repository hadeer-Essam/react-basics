import { Component } from "react";
// import logo from './logo.svg';
import Navbar from "./navbar";
import AddUser from "./AddUser";
import Test from "./test";
import Logged from "./log";
import styled from 'styled-components';
// import Radium from 'radium';
// import './App.css';
const StyledButton=styled.button`
background-color:pink;
color:blue;
border:none;
border-radius:5px;
padding:5px;
transition; all  0.35s linear;
margin-bottom:10px;
&:hover{
  background-color:red;
}
`

class App extends Component {
  state = {
    list: [
      { name: "Hadeer", age: 25, gender: "female", id: 1 },
      { name: "Mohamed", age: 20, gender: "male", id: 2 },
      { name: "Ola", age: 50, gender: "female", id: 3 },
      { name: "Ahmed", age: 30, gender: "male", id: 4 },
    ],
  };

  addUser = (user) => {
    let newList = [...this.state.list, user];
    this.setState({
      list: newList
    });
  };
  deleteUser = (id) => {
    let newList = this.state.list.filter((user) => user.id !== id);
    this.setState({
      list: newList
    });
  };

  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <AddUser adduser={this.addUser} />
        <Test list={this.state.list} removeUser={this.deleteUser} />
        <Logged />
        <StyledButton>Hello style!</StyledButton>


      </div>
    );
  }
}

export default App;
