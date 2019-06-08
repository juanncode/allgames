import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import GamesHome from "../pages/GamesHome";
import SetGames from "../pages/SetGames";
import GamesList from "../pages/GamesList";
import GamesDetails from "../pages/GamesDetails";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={GamesHome} />
          <Route exact path="/home" component={GamesHome} />
          <Route exact path="/agregar" component={SetGames} />
          <Route exact path="/canchas" component={GamesList} />
          <Route exact path="/canchas/:itemId" component={GamesDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
