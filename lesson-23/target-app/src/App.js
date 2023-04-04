import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Example1Page,
  Example2Page,
  Example3Page,
  Example4Page,
  HomePage,
  NotFoundPage,
} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/example-1" component={Example1Page} />
        <Route path="/example-2" component={Example2Page} />
        <Route path="/example-3" component={Example3Page} />
        <Route path="/example-4" component={Example4Page} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
