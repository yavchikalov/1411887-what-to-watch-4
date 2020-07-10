import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SmallMovieCard} from './';

Enzyme.configure({
  adapter: new Adapter()
});

const movie = {
  name: `Fantastic Beasts`,
  cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const handleMouseover = jest.fn();

describe(`e2e SmallMovieCard component`, () => {
  it(`Проверяем отработку обработчика наведения на карточку и входящих данных в метод`, () => {

    const smallMovieCardScreen = mount(
        <SmallMovieCard
          name={movie.name}
          cover={movie.cover}
          trailer={movie.trailer}
          onMouseover={handleMouseover}
        />
    );

    const firstMovie = smallMovieCardScreen.find(`.small-movie-card`).first();

    firstMovie.simulate(`mouseover`, {preventDefault() {}});

    const instancesKeys = Object.keys(handleMouseover.mock.instances[0]);

    expect(handleMouseover).toHaveBeenCalledTimes(1);
    expect(instancesKeys).toContain(`name`);
    expect(instancesKeys).toContain(`cover`);

  });
});
