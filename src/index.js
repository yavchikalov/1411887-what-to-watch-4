import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App
      name="The Grand Budapest Hotel"
      genre="Drama"
      year="2014"
      movies={movies}
    />,
    document.getElementById(`root`)
);
