import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import MinionGuarda from "./containers/MinionGuarda";
import ReiMinion from "./containers/ReiMinion";
import MinionBombeiro from "./containers/MinionBombeiro";
import MinionDePijama from "./containers/MinionDePijama";
import MinionDonoDaLua from "./containers/MinionDonoDaLua";
import SenhoraMinion from "./containers/SenhoraMinion";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/MinionGuarda">
        <MinionGuarda />
      </Route>
      <Route exact path="/ReiMinion">
        <ReiMinion />
      </Route>
      <Route exact path="/MinionBombeiro">
        <MinionBombeiro />
      </Route>
      <Route exact path="/MinionDePijama">
        <MinionDePijama />
      </Route>
      <Route exact path="/MinionDonoDaLua">
        <MinionDonoDaLua />
      </Route>
      <Route exact path="/SenhoraMinion">
        <SenhoraMinion />
      </Route>
      
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/settings">
        <Settings />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/MinionBombeiro">
        <MinionBombeiro />
      </AuthenticatedRoute>
      
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}