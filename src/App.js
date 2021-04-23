import React from "react";
import "./global.css";
import { GlobalStyle } from "./global";
import { GlobalProvider } from "./context/contextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import PromoCodeModal from "./components/PromoCodeModal";

function App() {
  const [promoModal, setPromoModal] = React.useState(true);

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
      <PromoCodeModal promoModal={promoModal} setPromoModal={setPromoModal} />
    </>
  );
}

export default App;
