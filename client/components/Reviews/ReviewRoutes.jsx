import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Reviews from './Reviews'
import Review from './Review'
import { getReviews } from '../../client-api'

class ReviewRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: [],
      errorMessage: ''
    }
    this.fetchReviews = this.fetchReviews.bind(this)
  }
  componentWillMount () {
    this.fetchReviews()
  }
  fetchReviews () {
    return getReviews()
    .then(reviews => {
      this.setState({ reviews: reviews })
    })
    .catch(err => {
      this.setState({ errorMessage: err.message})
    })
  }
  render () {
    return (
      <div>
        <Switch>
          <Route
            exact
            path='/reviews'
            render={ (props) =>
              <Reviews
                reviews={this.state.reviews}
                fetchReviews={this.fetchReviews}
                {...props}
              />
            }
          />
        </Switch>
        {this.state.errorMessage &&
          <h1>{this.state.errorMessage}</h1>}
      </div>
    )
  }
}
module.exports = ReviewRoutes
