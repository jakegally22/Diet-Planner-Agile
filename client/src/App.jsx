import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Home from "./routes/Home";
import RestaurantdetailPage from "./routes/RestaurantdetailPage";
import UpdatePage from "./routes/UpdatePage";
import Dashboard from "./routes/Dashboard";
import LoginPage from "./routes/LoginPage";
import DietCalculator from "./routes/DietCalculator";
import RecipePage from "./routes/RecipePage";
import FoodsPage from "./routes/FoodsPage";
import ExercisesPage from "./routes/ExercisesPage";
import RestaurantFinderPage from "./routes/RestaurantFinderPage";


const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants/:id/update" component={UpdatePage} />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantdetailPage}
            />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantdetailPage}
            />
            <Route
              exact
              path="/Dashboard"
              component={Dashboard}
            />
            <Route
              exact
              path="/LoginPage"
              component={LoginPage}
            />
            <Route
              exact
              path="/DietCalculator"
              component={DietCalculator}
            />
            <Route
              exact
              path="/RecipePage"
              component={RecipePage}
            />
            <Route
              exact
              path="/FoodsPage"
              component={FoodsPage}
            />
            <Route
              exact
              path="/ExercisesPage"
              component={ExercisesPage}
            />
            <Route
              exact
              path="/RestaurantFinderPage"
              component={RestaurantFinderPage}
            />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
