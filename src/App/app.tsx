import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import SpaceDetails from '../Containers/spaceContainer';

const history = createBrowserHistory();
export default class App extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
    render() {
  var RoutingApp = (
    <div className="container-fluid">
      <Router history={history}>
        <div>
          <Switch>
            <Route path={`/`}component={SpaceDetails} exact={true}/>
            <Route path={`/space`}component={SpaceDetails} exact={true}/>           
          </Switch>
        </div>
      </Router>
    </div>);
    return RoutingApp;
}
}