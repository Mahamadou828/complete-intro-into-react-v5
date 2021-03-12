import pet, { ANIMALS } from '@frontendmasters/pet';
import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/theme';
import { useDropdown } from '../hooks/useDropdown';
import { Result } from './Result';

export function SearchParam() {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  const requestPets = async () => {
    const { animals: apiAnimals } = await pet.animals({
      location,
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="location"
          />
          <button style={{ background: theme }}>submit</button>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            id="theme"
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
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
