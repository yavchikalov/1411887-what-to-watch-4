import React from 'react';

/* eslint-disable react/prop-types */
export default function Main(props) {
  return (
    <>
      <h1>Главная страница</h1>
      <p>{ props.name }</p>
      <p>{ props.genre }</p>
      <p>{ props.year }</p>
    </>
  );
}
