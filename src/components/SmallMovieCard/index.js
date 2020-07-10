import React from 'react';
import PropTypes from 'prop-types';
import {VideoPlayer} from 'components/VideoPlayer';

export function SmallMovieCard(props) {
  const handleMouseover = () => props.onMouseover({name: props.name, cover: props.cover});

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleMouseover}
      onMouseOut={props.onMouseout}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          src={props.trailer}
          poster={props.cover}
        />
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
  trailer: PropTypes.string.isRequired,
  onMouseover: PropTypes.func,
  onMouseout: PropTypes.func
};
