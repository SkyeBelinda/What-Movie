import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import MovieRoutes from './Movies/MovieRoutes'
import ReviewRoutes from './Reviews/ReviewRoutes'

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
        <Route
          path='/reviews'
          component={ReviewRoutes}
          />
        </Switch>
      </div>
    </div>
  )
}
module.exports = Layout
