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
      <div className="deviceShell">
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

      <aside className="appDisclaimer">
        <small>Open-source showcase</small>
        <a
          className="disclaimerItem isLink"
          href="https://github.com/Fr4n0m/tiktok-clone"
          rel="noreferrer"
          target="_blank"
        >
          <span>Repository</span>
          <em>Open PRs available in the repository pull requests tab.</em>
        </a>
        <a
          className="disclaimerItem isLink"
          href="https://codebyfran.es"
          rel="noreferrer"
          target="_blank"
        >
          <span>Author</span>
          <strong>codebyfran.es</strong>
        </a>
      </aside>
    </div>
  );
};

export default App;
