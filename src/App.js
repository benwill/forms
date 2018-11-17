import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./app.css";

// Pages
import BasicForm from "./BasicForm";
import BasicValidation from "./BasicValidation";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ul className="app-header">
          <li>
            <Link to="/basic">Basic Form</Link>
          </li>
          <li>
            <Link to="/basic-validation">Advanced Form</Link>
          </li>
        </ul>
        <div className="app-content">
          <Switch>
            <Route exact path="/basic" component={BasicForm} />
            <Route exact path="/basic-validation" component={BasicValidation} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
