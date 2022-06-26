import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      {users.length > 0 && (
        <>
          {users.map((user) => (
            <div className="post" key={user.id}>
              <div className="userid">
                <label>User Xyz </label>
                <br></br>
                <label> Posted by #user on: 12 feb </label>
              </div>
              <div>
                <img src={user.url} />
                <div className="commentbx">
                  <input type="text" placeholder="Add A Comment.."></input>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button>Post</button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
