import React from 'react';
import ListMovies from './';
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

describe(`ListMovies`, () => {
  it(`snapshot ListMovies`, () => {
    const tree = renderer.create(
        <ListMovies
          movies={movies}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
