import React from "react";
import "./App.css";
import { Route } from "wouter";
import Upload from "./pages/Upload/index.jsx";
import FeedVideos from "./components/FeedVideos/index.jsx";

const App = () => {
  return (
    <div className="App">
      <main>
        <Route path="/">
          <FeedVideos />
        </Route>

        <Route path="/upload">
          <Upload />
        </Route>
      </main>
    </div>
  );
};

export default App;
