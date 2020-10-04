import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes";
import About from "./routes";
import Detail from "./routes";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
