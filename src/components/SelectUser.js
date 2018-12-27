import React, { Component } from "react";

export class SelectUser extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const user = e.target.value;
    this.props.onChange(user);
  }

  render() {
    return (
      <select id="users" onChange={this.handleChange}>
        <option value="user1">Pat</option>
        <option value="user2">Pam</option>
        <option value="user3">John</option>
        <option value="user4">Betty</option>
      </select>
    );
  }
}
