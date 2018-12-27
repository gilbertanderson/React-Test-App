import React, { Component } from "react";
import users from "../assets/mock-users";
import "../styles/styles.css";

export class Users extends Component {
  render() {
    const userData = users.map((user, index) => {
      return (
        <div className="col-sm-6 col-md-3">
          <div className="card" key={index}>
            <img
              className="card-image"
              src={user.profile_pic_url}
              alt="profile"
            />
            <div className="card-body">
              <label>
                <h4 className="card-title">Name: {user.name}</h4>
              </label>
              <ul className="card-text">ID: {user.id}</ul>
              <ul className="card-text">Bio: {user.bio}</ul>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">{userData}</div>
      </div>
    );
  }
}
