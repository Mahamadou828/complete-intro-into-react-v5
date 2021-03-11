import pet, { ANIMALS } from '@frontendmasters/pet';
import React, { useEffect, useState } from 'react';
import { useDropdown } from '../hooks/useDropdown';

export function SearchParam() {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  useEffect(() => {
    (async () => {
      try {
        setBreeds([]);
        setBreed('');

        const { breeds } = await pet.breeds(animal);
        const breedStrings = breeds.map(({ name }) => name);
        setBreeds(breedStrings);

        pet.breeds('dog');
      } catch (err) {
        console.log(err);
      }
    })();
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form>
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
    </div>
  );
}
