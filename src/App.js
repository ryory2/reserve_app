/* App.js */
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import UserEdit from './pages/UserEdit';

const  App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/users/:id" component={UserDetail} />
        <Route exact path="/users/:id/edit" component={UserEdit} />
      </Switch>
    </Router>
  );
};

export default App;