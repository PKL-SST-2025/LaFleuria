import { Router, Route } from "@solidjs/router";
import type { Component } from "solid-js";

import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Checkout from "./Pages/CheckOut";
import ForgotPassword from "./Pages/ForgotPassword";
import Payment from "./Pages/Payment";
import PaymentSuccess from "./Pages/Payment";

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />

      {/* Tambahkan rute lain jika ada */}
      {<Route path="/dashboard" component={Dashboard} />}
      {<Route path="/checkout" component={Checkout} />}
      {<Route path="/forgot-password" component={ForgotPassword} />}
      {<Route path="/payment" component={Payment} />}
      {<Route path="/payment-success" component={PaymentSuccess} />}

      {/* Fallback route */}
      <Route path="*" component={LandingPage} />
    </Router>
  );
};

export default App;
