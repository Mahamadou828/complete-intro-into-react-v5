import React from 'react';
import { render } from 'react-dom';
import { Pet } from './Pet';

const App = () => {
  //create a Element who is a div and put into it a h1
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'Bird',
      breed: 'Cockatiel',
    }),
    React.createElement(Pet, {
      name: 'Doink',
      animal: 'Cat',
      breed: 'Mixed',
    }),
  ]);
};
render(React.createElement(App), document.getElementById('root'));
