import { Router, Route } from "@solidjs/router";
import type { Component } from "solid-js";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login"; // tambahkan ini
import LandingPage from "./Pages/LandingPage";

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} /> {/* rute login */}
      <Route path="/signup" component={SignUp} /> {/* rute sign up */}
      <Route path="*" component={LandingPage} />
    </Router>
  );
};

export default App;
