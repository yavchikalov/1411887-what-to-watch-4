import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './';

Enzyme.configure({
  adapter: new Adapter()
});

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const name = `The Grand Budapest Hotel`;
const genre = `Drama`;
const year = `2014`;

const handleClickLogo = jest.fn();

describe(`e2e Main component`, () => {
  it(`head should be called`, () => {

    const appScreen = shallow(
        <Main
          name={name}
          genre={genre}
          year={year}
          movies={movies}
          onClickLogo={handleClickLogo}
        />
    );

    const logo = appScreen.find(`header .logo`);

    logo.simulate(`click`);

    expect(handleClickLogo).toHaveBeenCalledTimes(1);
  });
});
