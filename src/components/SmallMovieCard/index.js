import React from 'react';
import PropTypes from 'prop-types';

export function SmallMovieCard(props) {
  const handleMouseover = () => props.onMouseover({name: props.name, cover: props.cover});

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleMouseover}
      onMouseOut={props.onMouseout}
    >
      <div className="small-movie-card__image">
        <img src={props.cover} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{props.name}</a>
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
