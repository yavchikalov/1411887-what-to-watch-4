import React from 'react';
import PropTypes from 'prop-types';

export class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
      poster: props.poster,
      isOver: false,
      timer: null
    };
    this.video = React.createRef();

    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
  }

  handleMouseover() {
    this.setState({
      timer: setTimeout(() => {
        this.video.current.play();
      }, 1000),
      isOver: true
    });
  }

  handleMouseout() {
    clearTimeout(this.state.timer);
    this.video.current.load();
    this.setState({
      isOver: false,
      timer: null
    });
  }

  componentDidMount() {
    if (this.video && this.video.current) {
      this.video.current.volume = 0;
    }
  }

  render() {
    return (
      <video
        ref={this.video}
        src={this.state.src}
        poster={this.state.poster}
        onMouseOver={this.handleMouseover}
        onMouseOut={this.handleMouseout}
      />
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};
