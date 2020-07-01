import React from 'react';
import SmallMovieCard from './';
import renderer from 'react-test-renderer';

const movie = {
  name: `Fantastic Beasts`,
  cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

describe(`SmallMovieCard`, () => {
  it(`snapshot SmallMovieCard`, () => {
    const tree = renderer.create(
        <SmallMovieCard
          name={movie.name}
          cover={movie.cover}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
