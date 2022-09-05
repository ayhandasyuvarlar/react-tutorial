import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

class App extends React.Component {
  state = {
    idx: 4,
    user: [
      { name: "Ayhan", situation: "online", id: 1 },
      { name: "Ahmet", situation: "online", id: 2 },
      { name: "Ali", situation: "offline", id: 3 },
    ],
  };
  addUser = (name) => {
    let id = this.state.idx + 1;
    let user = {
      name: name,
      situation: "online",
      id: id,
    };
    let users = [...this.state.user, user];
    this.setState({
      user: users,
    });
  };
  deleteMethod = (id) => {
    let tUsers = this.state.user.filter((us) => {
      return us.id !== id;
    });
    this.setState({
      user: tUsers,
    });
  };
  changeUpdateMethod = (data) => {
    console.log(data.situation);
    let tUser = this.state.user.map((us) => {
      if (us.id === data.id) {
        us.situation = data.situation;
      }
      return us;
    });
    this.setState({
      user: tUser,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <UserList
              users={this.state.user}
              deleteMethod={this.deleteMethod}
              changeUpdateMethod={this.changeUpdateMethod}
            />
          </div>
        </div>
        <hr />
        <AddUser addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
