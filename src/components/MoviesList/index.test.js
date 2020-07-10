import React from 'react';
import {MoviesList} from './';
import renderer from 'react-test-renderer';

const movies = [
  {
    name: `Fantastic Beasts`,
    cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    name: `Bohemian Rhapsody`,
    cover: `img/bohemian-rhapsody.jpg`,
    trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    name: `Macbeth`,
    cover: `img/macbeth.jpg`,
    trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
