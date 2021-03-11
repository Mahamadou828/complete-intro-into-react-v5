import pet from '@frontendmasters/pet';
import React, { Component } from 'react';
import Carousel from '../components/Carousel';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  async componentDidMount() {
    const { animal } = await pet.animal(this.props.id);
    this.setState({
      ...animal,
      location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
      breed: animal.breeds.primary,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) return <h1>Loading....</h1>;
    const { animal, breed, location, description, name, photos } = this.state;
    return (
      <div className="details">
        <Carousel photos={photos} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
