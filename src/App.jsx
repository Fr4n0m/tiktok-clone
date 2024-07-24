import React from "react";
import "./App.css";
import { Route } from "wouter";
import NavBar from "./components/NavBar";

import Home from "./pages/Home/index.jsx";
import Upload from "./pages/Upload/index.jsx";
import Login from "./pages/Login/index.jsx";
import Friends from "./pages/Friends/index.jsx";
import Inbox from "./pages/Inbox/index.jsx";
import Profile from "./pages/Profile/index.jsx";

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
