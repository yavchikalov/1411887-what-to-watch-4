// eslint-disable react/prop-types
import React from 'react';
import Main from './Main';

/* eslint-disable react/prop-types */
export default function App(props) {
  return (
    <Main
      name={props.name}
      genre={props.genre}
      year={props.year}
    />
  );
}
