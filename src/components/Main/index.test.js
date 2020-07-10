import React from 'react';
import App from './';
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
const name = `The Grand Budapest Hotel`;
const genre = `Drama`;
const year = `2014`;

describe(`Main`, () => {
  it(`snapshot Main`, () => {
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
