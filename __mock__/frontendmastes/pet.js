import { readFileSync } from 'fs';
import path from 'path';
import { act } from 'react-testing-library';
export const _breeds = [
  { name: 'Bichon Frise' },
  { name: 'Bolognese' },
  { name: 'Coton de Tulear' },

  { name: 'Havanese' },
  { name: 'Maltese' },
];

export const _dogs = JSON.parse(
  readFileSync(path.join(__dirname, 'res.json')).toString()
);

export const ANIMALS = ['dog', 'cat', 'bird'];

const mock = {
  breeds: jest.fn(() => {
    return {
      then: (callback) => act(() => callback({ breeds: _breeds })),
    };
  }),
  animal: jest.fn(() => {
    return {
      then: (callback) => act(() => callback(_dogs)),
    };
  }),
};

export default mock;
