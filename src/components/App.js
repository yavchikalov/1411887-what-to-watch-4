import React from 'react';
import PropTypes from 'prop-types';
import Main from './Main';

export default function App(props) {
  return (
    <Main
      name={props.name}
      genre={props.genre}
      year={props.year}
      movies={props.movies}
    />
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
};
