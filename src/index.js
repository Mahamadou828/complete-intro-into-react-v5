import React from 'react';
import { render } from 'react-dom';
import { Pet } from './components/Pet';
import { SearchParam } from './components/SearchParam';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParam />
      <Pet animal="Dog" name="Luna" breed="Havanese" />
      <Pet animal="Cat" name="Doink" breed="Mixed" />
      <Pet animal="Bird" name="Pepper" breed="Cockatiel" />
    </div>
  );
};
render(<App />, document.getElementById('root'));
