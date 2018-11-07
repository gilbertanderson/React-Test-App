import React from "react";
import ReactDOM from "react-dom";
import users from "./assets/mock-users";
import "./styles.css";

class App extends React.Component {
  render() {
    const userData = users.map(user => {
      return (
        <div className="card">
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.profile_pic_url}</li>
          <li>{user.bio}</li>
          <button>Edit</button>
        </div>
      );
    });
    return <p>{userData}</p>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App users />, rootElement);
