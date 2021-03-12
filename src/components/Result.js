import React from 'react';
import { Pet } from './Pet';

export const Result = ({ pets }) => {
  return (
    <div data-testid="search-results" className="search">
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            {...pet}
            key={pet.id}
            breed={pet.breeds.primary}
            location={`${pet.contact.address}, ${pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
};
