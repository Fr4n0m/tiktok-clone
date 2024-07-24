import React from "react";
import "./App.css";
import { Route } from "wouter";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Friends from "./pages/Friends";
import Inbox from "./pages/Inbox";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="App">
      <main>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/upload">
          <Upload />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/friends">
          <Friends />
        </Route>

        <Route path="/inbox">
          <Inbox />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
      </main>
      <NavBar />
    </div>
  );
};

export default App;
