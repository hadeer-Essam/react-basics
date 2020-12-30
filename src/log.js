import { Component } from "react";
import Radium from "radium";

class Logged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: false,
    };
  }

  handleLogin = (e) => {
    this.setState({
      isLogIn: true,
    });
  };
  handleLogout = (e) => {
    this.setState({
      isLogIn: false,
    });
  };
  style = {
    color: "white",
    backgroundColor: "blue",
    padding: "7px ",
    borderRadius: "5px",
    border: "none",
    transition: "all 0.3s linear",
    ":hover": {
      backgroundColor: "darkblue",
      color: "red",
    },
  };

  render() {
    let log = this.state.isLogIn;
    let style = {
      color: "white",
      backgroundColor: "blue",
      padding: "7px ",
      borderRadius: "5px",
      border: "none",
      transition: "all 0.3s linear",
      ":hover": {
        backgroundColor: "darkblue",
        color: "red",
      },
    };
    if (log) {
      style.backgroundColor = "yellow";
      style.color = "black";
      style[":hover"] = {
        backgroundColor: "orange",
        color: "red",
      };
      this.greeting = <h1>Welcome Back :)</h1>;
      this.button = (
        <button style={style} onClick={this.handleLogout}>
          Log out
        </button>
      );
    } else {
      this.greeting = <h1>Pleaase Log in</h1>;
      this.button = (
        <button style={style} onClick={this.handleLogin}>
          Log In
        </button>
      );
    }
    return (
      <div className="container-fluid mb-5">
        {this.greeting}
        {this.button}
      </div>
    );
  }
}

export default Radium(Logged);
