import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import MovieRoutes from './Movies/MovieRoutes'

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
            path='/movies'
            component={MovieRoutes}
          />
        </Switch>
      </div>
    </div>
  )
}
module.exports = Layout
