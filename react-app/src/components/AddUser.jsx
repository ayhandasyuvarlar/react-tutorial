import React, { Component } from "react";

export default class AddUser extends Component {
  state = {
    name: "",
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addUser(this.state.name)
  };
  changeHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" id="name" onChange={this.changeHandler} />
        <button> Kaydet</button>
      </form>
    );
  }
}
