import React from 'react'
import {Link} from 'react-router-dom'
import {getMovieData, getReviews} from '../../client-api'

class Movie extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      reviews: []
    }
  }
  componentDidMount() {
    this.getSingleMovieData(this.props.movie.title, this.props.movie.id)
  }
  componentWillReceiveProps(props) {
    this.getSingleMovieData(props.movie.title, props.movie.id)
  }
  getSingleMovieData(title, id) {
    if (title) getMovieData(title)
      .then(data => this.setState({data}) )
    if (id) getReviews(id)
      .then(reviews => this.setState({ reviews }))
  }
  getMovieReviews(id) {
    
  }
  render () {
    const {data, reviews} = this.state
    const {id, title, plot} = this.props.movie
    return (
      <div className="">
        <h1>{title}</h1>
        {/* <h3>{this.state.data}</h3> */}
        {data && <div>
          <h3>{data.overview}</h3>
          <img src={`http://image.tmdb.org/t/p/w185/${data.backdrop_path}`} />
          <img src={`http://image.tmdb.org/t/p/w185/${data.poster_path}`} />
          <hr />
          <div key={reviews[0].id}>
            <h1><strong>{reviews[0].reviewer+ ": "} </strong>{reviews[0].writeup}</h1>
            <img src={reviews[0].url} />
          </div>
        </div>}
      </div>
    )
  }
}

Movie.defaultProps = {
  movie: {
    id: null,
    title: null,
    plot: 'Jeff'
  }
}

export default Movie
