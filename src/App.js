import React from "react";
import "./global.css";
import { GlobalStyle } from "./global";
import { GlobalProvider } from "./context/contextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

function App() {
  return (
    <>
      <GlobalProvider>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
