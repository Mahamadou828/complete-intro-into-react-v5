import { Animal } from '@frontendmasters/pet';
import React, { FunctionComponent } from 'react';
import { Pet } from './Pet';

interface IProps {
  pets: Animal[];
}

export const Result: FunctionComponent<IProps> = ({ pets }) => {
  return (
    <div className="search">
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
