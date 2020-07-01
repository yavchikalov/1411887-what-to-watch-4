import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import filmMocks from 'mocks/films';

ReactDOM.render(
    <App
      name="The Grand Budapest Hotel"
      genre="Drama"
      year="2014"
      movies={filmMocks}
    />,
    document.getElementById(`root`)
);
