import React, { Component } from "react";
import { Users } from "./Users";
import { SelectUser } from "./SelectUser";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { user: "user0" };
  }

  changeUser(newUser) {
    this.setState({
      user: newUser
    });
  }

  render() {
    return (
      <div>
        <SelectUser onChange={this.changeUser} />
        <Users selectedUser={this.state.user} />
      </div>
    );
  }
}

export default App;
