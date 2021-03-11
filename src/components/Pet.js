import React from 'react';

export const Pet = ({ name, animal, breed, photos, location, id }) => {
  let hero = 'http://placecorgi.com/260/180';
  if (photos.length) {
    hero = photos[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};
