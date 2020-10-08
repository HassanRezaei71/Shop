import React from "react";
import Header from "./defaultHeader";
import Footer from "./defaultFooter";
import routes from "../constants/routes";
import { Spinner } from "reactstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function DefaultContainer() {
  return (
    <div>
      <Header />
        <Switch>
          <React.Suspense
            fallback={
              <div style={{ width: "100%", textAlign: "center" }}>
                <Spinner color="info" />
              </div>
            }
          >
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
      <Footer />
    </div>
  );
}
