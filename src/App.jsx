import React from "react";
import "./App.css";
import { lazy, Suspense } from "react";
import { Route } from "wouter";
import NavBar from "./components/NavBar";

const Home = lazy(() => import("./pages/Home/index.jsx"));
const Upload = lazy(() => import("./pages/Upload/index.jsx"));
const Login = lazy(() => import("./pages/Login/index.jsx"));

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
        </Suspense>
      </main>
      <NavBar />
    </div>
  );
};

export default App;
