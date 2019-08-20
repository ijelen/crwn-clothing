import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";

const page404 = () => <p>Page 404</p>;

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route component={page404} />
      </Switch>
    </>
  );
}

export default App;
