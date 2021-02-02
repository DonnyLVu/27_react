import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacter from '../character/AllCharacter';
import Character from '../character/Character';

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
              path="/:id"
              exact
              render={routerProps => <Character {...routerProps} />}
            />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default App;
