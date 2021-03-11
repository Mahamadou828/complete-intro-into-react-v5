import pet, { ANIMALS } from '@frontendmasters/pet';
import React, { useEffect, useState } from 'react';
import { useDropdown } from '../hooks/useDropdown';
import { Result } from './Result';

export function SearchParam() {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

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
          <button>submit</button>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
      </form>
      <Result pets={pets} />
    </div>
  );
}
