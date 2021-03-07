import React from "react";
import { Route, Switch } from "react-router-dom";
import BoardPage from "./components/views/BoardPage/BoardPage";
import ArticlePage from "./components/views/ArticlePage/ArticlePage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={BoardPage} />
        <Route exact path="/article/:articleId" component={ArticlePage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
