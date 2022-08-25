import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

class App extends React.Component {
  state = {
    user: [
      { name: "Ayhan", situation: "online" },
      { name: "Ahmet", situation: "online" },
      { name: "Ali", situation: "offline" },
    ],
  };
addUser = (name) =>{
  console.log(name)
}
  render() {
    return (
      <div className="App">
        <UserList users={this.state.user} />
        <hr />
        <AddUser  addUser={this.addUser}/>
      </div>
    );
  }
}

export default App;
