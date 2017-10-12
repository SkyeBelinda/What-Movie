import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import PlayerRoutes from './Players/PlayerRoutes'
import GameRoutes from './Games/GameRoutes'

function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Switch>
          <Route
            exact
            path='/'
            render={() =>
              <Home />}
          />
          <Route
            path='/players'
            component={PlayerRoutes}
          />
          <Route
            path='/games'
            component={GameRoutes}
          />
        </Switch>
      </div>
    </div>
  )
}
module.exports = Layout
