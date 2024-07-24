import React from "react";
import "./App.css";
import { lazy, Suspense } from "react";
import { Route } from "wouter";
import NavBar from "./components/NavBar";

const Home = lazy(() => import("./pages/Home/index.jsx"));
const Upload = lazy(() => import("./pages/Upload/index.jsx"));
const Login = lazy(() => import("./pages/Login/index.jsx"));
const Friends = lazy(() => import("./pages/Friends/index.jsx"));
const Inbox = lazy(() => import("./pages/Inbox/index.jsx"));
const Profile = lazy(() => import("./pages/Profile/index.jsx"));
const Search = lazy(() => import("./pages/Search/index.jsx"));
const Live = lazy(() => import("./pages/Live/index.jsx"));
const FollowVideoFeed = lazy(() => import("./pages/FollowVideoFeed/index.jsx"));

const App = () => {
  return (
    <div className="App">
      <main>
        <Suspense fallback={<div />}>
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

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/live">
            <Live />
          </Route>

          <Route path="/followVideoFeed">
            <FollowVideoFeed />
          </Route>
        </Suspense>
      </main>
      <NavBar />
    </div>
  );
};

export default App;
