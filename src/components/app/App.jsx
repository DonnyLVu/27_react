import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacters from '../characters/AllCharacters';
import Details from '../Detail';

const App = () => {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={routerProps => <AllCharacters {...routerProps} />}
            />
            <Route
              path="/details"
              exact
              render={routerProps => <Details {...routerProps} />}
            />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default App;
