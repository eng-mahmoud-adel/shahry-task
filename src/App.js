import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />

          <Route>
            <Redirect to="/" />
          </Route>
      </Switch>
    </>
  );
}

export default App;
