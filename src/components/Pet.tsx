import { Photo } from '@frontendmasters/pet';
import { Link } from '@reach/router';
import React, { FunctionComponent } from 'react';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  photos: Photo[];
  location: string;
  id: number;
}

export const Pet: FunctionComponent<IProps> = ({
  name,
  animal,
  breed,
  photos,
  location,
  id,
}) => {
  let hero = 'http://placecorgi.com/260/180';
  if (photos.length) {
    hero = photos[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};
