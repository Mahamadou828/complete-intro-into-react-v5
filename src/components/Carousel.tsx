import { Photo } from '@frontendmasters/pet';
import React, { Component } from 'react';

interface IProps {
  photos: Photo[];
}

export default class Carousel extends Component<IProps> {
  state = {
    photos: [] as string[],
    active: 0,
  };

  public handleClick(event: React.MouseEvent<HTMLElement>) {
    if (!(event.target instanceof HTMLElement) || !event.target.dataset.index)
      return;
    this.setState({
      active: +event.target.dataset.index,
    });
  }

  static getDerivedStateFromProps({ photos: media }: IProps) {
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
            <img
              src={photo}
              key={photo}
              onClick={this.handleClick}
              data-index={index}
              className={index === active ? 'active' : ''}
              alt="image"
            />
          ))}
        </div>
      </div>
    );
  }
}
