import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Movies from './Movies'
import Movie from './Movie'
import { getMovies } from '../../client-api'

class MovieRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [],
      errorMessage: ''
    }
    this.fetchMovies = this.fetchMovies.bind(this)
  }
  componentWillMount () {
    this.fetchMovies()
  }
  fetchMovies () {
    return getMovies()
      .then(movies => {
        this.setState({ movies: movies })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }
  render () {
    return (
      <div className="">
        <Switch>
          <Route
            exact
            path='/movies'
            render={ (props) =>
             <Movies
               movies={this.state.movies}
               fetchMovies={this.fetchMovies}
               {...props}
             />
            }
          />
          <Route
            exact
            path='/movies/movie/:id'
            render={(props) =>
              <Movie
                movie={this.state.movies.find((movie) =>
                  movie.id === Number(props.match.params.id))
                }
                fetchMovies={this.fetchMovies}
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
module.exports = MovieRoutes
