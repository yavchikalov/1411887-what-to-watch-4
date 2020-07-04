import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {movies} from 'mocks/movies';

ReactDOM.render(
    <App
      name="The Grand Budapest Hotel"
      genre="Drama"
      year="2014"
      movies={movies}
    />,
    document.getElementById(`root`)
);
