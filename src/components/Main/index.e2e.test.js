import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './';

Enzyme.configure({
  adapter: new Adapter()
});

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
const name = `The Grand Budapest Hotel`;
const genre = `Drama`;
const year = `2014`;

const handleLogoClick = jest.fn();

describe(`e2e Main component`, () => {
  it(`head should be called`, () => {

    const appScreen = mount(
        <Main
          name={name}
          genre={genre}
          year={year}
          movies={movies}
          onLogoClick={handleLogoClick}
        />
    );

    const logo = appScreen.find(`header .logo`);

    logo.simulate(`click`, {preventDefault() {}});

    expect(handleLogoClick).toHaveBeenCalledTimes(1);
  });
});
