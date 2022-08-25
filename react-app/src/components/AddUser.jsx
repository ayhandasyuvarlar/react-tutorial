import React, { Component } from "react";

export default class AddUser extends Component {
  state = {
    name: "",
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addUser(this.state.name);
    this.setState({
      name: "",
    });
  };
  changeHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler} className='form-group'>
        <input  className="form-control"
          type="text"
          id="name"
          onChange={this.changeHandler}
          value={this.state.name}
        />
        <button className="btn btn-success mt-1"> Kaydet</button>
      </form>
    );
  }
}
