import React from 'react';
import {SmallMovieCard} from './';
import renderer from 'react-test-renderer';

const movie = {
  name: `Fantastic Beasts`,
  cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`SmallMovieCard`, () => {
  it(`snapshot SmallMovieCard`, () => {
    const tree = renderer.create(
        <SmallMovieCard
          name={movie.name}
          cover={movie.cover}
          trailer={movie.trailer}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
