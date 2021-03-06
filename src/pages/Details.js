import pet from '@frontendmasters/pet';
import { navigate } from '@reach/router';
import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import { Modal } from '../components/Modal';
import ThemeContext from '../context/theme';
import ErrorBoundary from '../helpers/ErrorBoundary';
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: false,
      url: '',
    };
    this.toggleModal = this.toggleModal.bind(this);
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

  toggleModal() {
    return this.setState({
      showModal: !this.state.showModal,
    });
  }
  adopt() {
    navigate(this.state.url);
  }

  render() {
    if (this.state.loading) return <h1>Loading....</h1>;
    const {
      animal,
      breed,
      location,
      description,
      name,
      photos,
      showModal,
    } = this.state;
    return (
      <div className="details">
        <Carousel photos={photos} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ background: theme }} onClick={this.toggleModal}>
                adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>Would you like to adopt {name}</div>
              <button onClick={this.adopt}>Yes</button>
              <button onClick={this.toggleModal}>No, I am a monster</button>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
