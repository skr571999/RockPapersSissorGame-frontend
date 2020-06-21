import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Play from "./views/Play";
import Start from "./views/Start";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/start" />
      </Route>

      <Route path="/start" component={Start} />
      <Route path="/play" component={Play} />
    </Switch>
  );
}

export default Routes;
