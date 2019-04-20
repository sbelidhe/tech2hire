import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import DashboardPage from './DashboardPage'
import ExpensePage from './ExpensePage'
const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/expenses" component={ExpensePage} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
