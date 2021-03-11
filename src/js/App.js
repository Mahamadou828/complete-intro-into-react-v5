import React from 'react';
import { render } from 'react-dom';
import { Pet } from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet animal="Dog" name="Luna" breed="Havanese" />
      <Pet animal="Cat" name="Doink" breed="Mixed" />
      <Pet animal="Bird" name="Pepper" breed="Cockatiel" />
    </div>
  );
};
render(<App />, document.getElementById('root'));
