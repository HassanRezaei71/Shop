import React from "react";
import Header from "./defaultHeader";
import Footer from "./defaultFooter";
import routes from "../constants/routes";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function DefaultContainer() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <React.Suspense fallback={<h1>Loading</h1>}>
            {routes.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                render={(props) => <item.component {...props} />}
              />
            ))}
          </React.Suspense>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
