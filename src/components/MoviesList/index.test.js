import React from 'react';
import {MoviesList} from './';
import renderer from 'react-test-renderer';

const movies = [
  {
    name: `Fantastic Beasts`,
    cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    name: `Bohemian Rhapsody`,
    cover: `img/bohemian-rhapsody.jpg`
  },
  {
    name: `Macbeth`,
    cover: `img/macbeth.jpg`
  }
];

describe(`MoviesList`, () => {
  it(`snapshot MoviesList`, () => {
    const tree = renderer.create(
        <MoviesList
          movies={movies}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
