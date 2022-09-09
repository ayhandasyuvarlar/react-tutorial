import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { connect } from "react-redux";
class App extends React.Component {
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
    const { user } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <UserList
              users={user}
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
const mapStateToProprs = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProprs)(App);
