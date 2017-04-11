import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Welcome from './Welcome';
import App from './App';

import './styles/bootstrap.css'
//
// const Component=(
//   <Router history={hashHistory}>
//     <Route path="/" component={Welcome}>
//       <Route path="login" component={Login}></Route>
//       <Route path="register" component={Register}></Route>
//       <Route path="dashboard" component={Dashboard}></Route>
//       <IndexRoute component={Login} />
//     </Route>
//   </Router>
// );

ReactDOM.render(
    <App />,document.getElementById('root')
);
