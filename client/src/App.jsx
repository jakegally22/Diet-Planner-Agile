import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import { Restaurants2ContextProvider } from "./context/Restaurants2Context";

import Home from "./routes/Home";
import Home2 from "./routes/Home2";
import RestaurantdetailPage from "./routes/RestaurantdetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <div>
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/restaurants/:id/update" component={UpdatePage} /> */}
            <Route exact path="/restaurants/:id/update" />
            <Route exact path="/Page2" component={Home2} />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantdetailPage}
            />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>


    <Restaurants2ContextProvider>
      <div className="container">
        <Router>
          <Switch>

            {/* <Route exact path="/page2"/> */}
            {/* <Route exact path="/restaurants/:id/update" component={UpdatePage} /> */}
            {/* <Route exact path="/restaurants2/:id/update" /> */}
{/* 
            <Route
              exact
              path="/restaurants2/:id"
              component={RestaurantdetailPage}
            /> */}
          </Switch>
        </Router>
      </div>
    </Restaurants2ContextProvider>

    

    </div>
  );
};

export default App;
