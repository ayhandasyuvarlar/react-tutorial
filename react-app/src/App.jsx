
import React from "react";
import UserList from "./components/UserList";

class App extends React.Component {
  state = {
    user : [
      {name : "Ayhan"  ,situation:"online"},
      {name : "Ahmet"  ,situation:"online"},
      {name : "Ali"  ,situation:"offline"}
    ]
  }
  render() {
    return (
      <div className="App">
       <UserList  users={this.state.user}/ >
      </div>
    );
  }
}

export default App;
