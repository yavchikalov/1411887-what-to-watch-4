import React from 'react';
import PropTypes from 'prop-types';

export default function SmallMovieCard(props) {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => props.onMouseover(props)}
      onMouseOut={props.onMouseout}
    >
      <div className="small-movie-card__image">
        <img src={props.cover} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{ props.name }</a>
      </h3>
    </article>
  );
}

SmallMovieCard.defaultProp = {
  onMouseover: () => {},
  onMouseout: () => {}
};

SmallMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  onMouseover: PropTypes.func,
  onMouseout: PropTypes.func
};
