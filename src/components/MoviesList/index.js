import React from 'react';
import PropTypes from 'prop-types';
import {SmallMovieCard} from 'components/SmallMovieCard';

export class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      currentMovieHovered: null
    };
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
  }

  handleMouseover(movie) {
    this.setState({
      currentMovieHovered: movie
    });
  }

  handleMouseout() {
    this.setState({
      currentMovieHovered: null
    });
  }

  render() {
    return (
      <>
        { this.state.movies.map(({name, cover}, key) => (
          <SmallMovieCard
            key={key}
            name={name}
            cover={cover}
            onMouseover={this.handleMouseover}
            onMouseout={this.handleMouseout}
          />
        )) }
      </>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
  })).isRequired
};
