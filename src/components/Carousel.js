import React, { Component } from 'react';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      active: +event.target.dataset.index,
    });
  }

  static getDerivedStateFromProps({ photos: media }) {
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              src={photo}
              key={photo}
              onClick={this.handleClick()}
              data-index={index}
              className={index === active ? 'active' : ''}
              onKeyUp={this.handleClick}
              alt="image"
            />
          ))}
        </div>
      </div>
    );
  }
}
