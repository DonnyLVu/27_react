import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacter from '../character/AllCharacter';
import Detail from '../detail/Detail';

const App = () => {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={routerProps => <AllCharacter {...routerProps} />}
            />
            <Route
              path="/character/:id"
              exact
              render={routerProps => <Detail {...routerProps} />}
            />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default App;
