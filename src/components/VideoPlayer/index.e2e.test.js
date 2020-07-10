/* eslint-disable */
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {VideoPlayer} from './';

Enzyme.configure({
  adapter: new Adapter()
});

const movie = {
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  poster: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`e2e VideoPlayer component`, () => {
  it(`Проверяем состояние при наведии на плеер`, () => {

    const videoPlayerScreen = shallow(
        <VideoPlayer
          src={movie.src}
          poster={movie.poster}
        />
    );

    expect(videoPlayerScreen.state().isOver).toEqual(false);
    videoPlayerScreen.simulate('mouseover');
    expect(videoPlayerScreen.state().isOver).toEqual(true);
  });
})
