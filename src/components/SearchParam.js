import pet, { ANIMALS } from '@frontendmasters/pet';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import updateLocation from '../action/changeLocation';
import updateTheme from '../action/changeTheme';
import { useDropdown } from '../hooks/useDropdown';
import { Result } from './Result';

export function UNCONNECTED_SearchParam(props) {
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

  const requestPets = async () => {
    const { animals: apiAnimals } = await pet.animals({
      location: props.location,
      breed,
      type: animal,
    });
    return setPets(apiAnimals || []);
  };

  useEffect(() => {
    (async () => {
      try {
        setBreeds([]);
        setBreed('');

        const { breeds: apiBreeds } = await pet.breeds(animal);
        const breedStrings = apiBreeds.map(({ name }) => name);
        setBreeds(breedStrings);
      } catch (err) {
        alert(err);
      }
    })();
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            type="text"
            id="location"
            value={props.location}
            onChange={(e) => updateLocation(e.target.value)}
            placeholder="location"
          />
          <button style={{ background: props.theme }}>submit</button>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={props.theme}
            id="theme"
            onChange={(e) => updateTheme(e.target.value)}
            onBlur={(e) => updateTheme(e.target.value)}
          >
            <option value="peru">peru</option>
            <option value="darkblue">darkblue</option>
            <option value="mediumorchid">mediumorchid</option>
            <option value="chartreuse">chartreuse</option>
          </select>
        </label>
      </form>
      <Result pets={pets} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme,
  location: state.location,
});

const mapDispatchToProps = (dispatch) => ({
  updateLocation: (location) => dispatch(updateLocation(location)),
  updateTheme: (theme) => dispatch(updateTheme(theme)),
});

export const SearchParam = connect(
  mapStateToProps,
  mapDispatchToProps
)(UNCONNECTED_SearchParam);
