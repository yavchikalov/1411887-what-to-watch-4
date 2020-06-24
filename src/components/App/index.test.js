import React from 'react';
import App from './';
import renderer from 'react-test-renderer';

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const name = `The Grand Budapest Hotel`;
const genre = `Drama`;
const year = `2014`;

describe(`App`, () => {
  it(`snapshot App`, () => {
    const tree = renderer.create(
        <App
          name={name}
          genre={genre}
          year={year}
          movies={movies}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
