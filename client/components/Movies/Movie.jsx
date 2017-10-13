import React from 'react'
import {Link} from 'react-router-dom'
import {getMovieData} from '../../client-api'

class Movie extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.getSingleMovieData(this.props.movie.title)
  }
  componentWillReceiveProps(props) {
    this.getSingleMovieData(props.movie.title)
  }
  getSingleMovieData(title) {
    if (title) getMovieData(title)
      .then(data => this.setState({data}) )
  }
  render () {
    console.log(this.state)
    const {data} = this.state
    const {id, title, plot} = this.props.movie
    return (
      <div className="">
        <h1>{title}</h1>
        {/* <h3>{this.state.data}</h3> */}
        {data && <div>
          <h3>{data.overview}</h3>
          <img src={`http://image.tmdb.org/t/p/w185/${data.backdrop_path}`} />
          <img src={`http://image.tmdb.org/t/p/w185/${data.poster_path}`} />
        </div>}
      </div>
    )
  }
}

Movie.defaultProps = {
  movie: {
    id: 1,
    title: null,
    plot: 'Jeff'
  }
}

export default Movie
