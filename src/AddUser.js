import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      name: null,
      age: null,
      gender: null,
      id: 4,
    };
  }
  handleSubmit = async(e) => {
    e.preventDefault();
    const inputs = e.target;
    for (let i = 0; i < inputs.length - 1; i++) {
      if (i == 2 || i == 3) {
        if (inputs[i].checked) {
         await this.setState({
            [inputs[i].name]: inputs[i].value,
          });
        }
        continue;
      }
     await this.setState({
        [inputs[i].name]: inputs[i].value,
      });
    }
   await this.setState({
      id:++ this.state.id,
    });
   this.props.adduser(this.state);
  };

  render() {
    return (
      <div className="ml-3 my-4 w-50">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter your name"
            name="name"
            type="text"
            className="form-control mb-3"
          />
          <input
            type="number"
            name="age"
            placeholder="Enter you age"
            className="form-control mb-3"
          />
          <div>
            <input type="radio" name="gender" value="male"/>
            <label htmlFor="gender" className="mr-3">
              Male
            </label>
            <input type="radio" name="gender" value="female"/>
            <label htmlFor="gender">Female</label>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
       


      </div>
    );
  }
}
export default AddUser;
