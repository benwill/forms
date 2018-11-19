import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./app.css";
import examples from "./examples";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ul className="app-header">
          {examples.map(page => (
            <li key={page.url}>
              <Link to={`/${page.url}`}>{page.name}</Link>
            </li>
          ))}
        </ul>
        <div className="app-content">
          <Switch>
            {examples.map(page => (
              <Route
                key={page.url}
                exact
                path={`/${page.url}`}
                component={page.component}
              />
            ))}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
