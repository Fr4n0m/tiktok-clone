import "./App.css";
import { lazy, Suspense } from "react";
import { Route } from "wouter";
import NavBar from "./components/NavBar";

const Home = lazy(() => import("./pages/Home"));
const Upload = lazy(() => import("./pages/Upload"));
const Login = lazy(() => import("./pages/Login"));
const Friends = lazy(() => import("./pages/Friends"));
const Inbox = lazy(() => import("./pages/Inbox"));
const Profile = lazy(() => import("./pages/Profile"));
const Search = lazy(() => import("./pages/Search"));
const Live = lazy(() => import("./pages/Live"));
const FollowVideoFeed = lazy(() => import("./pages/FollowVideoFeed"));

const ROUTES = [
  { path: "/", Component: Home },
  { path: "/upload", Component: Upload },
  { path: "/login", Component: Login },
  { path: "/friends", Component: Friends },
  { path: "/inbox", Component: Inbox },
  { path: "/profile", Component: Profile },
  { path: "/search", Component: Search },
  { path: "/live", Component: Live },
  { path: "/followVideoFeed", Component: FollowVideoFeed },
];

const App = () => {
  return (
    <div className="App">
      <main>
        <Suspense fallback={<div className="route-fallback" />}>
          {ROUTES.map(({ path, Component }) => (
            <Route key={path} path={path}>
              <Component />
            </Route>
          ))}
        </Suspense>
      </main>
      <NavBar />
    </div>
  );
};

export default App;
