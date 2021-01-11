import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home'
import bucket from './Pages/bucket/bucket'
import reportWebVitals from './reportWebVitals';
import About from './Pages/about/about'
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bucket" component={bucket} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
