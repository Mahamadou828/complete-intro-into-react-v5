import React from 'react';
import { render } from 'react-dom';
import { SearchParam } from './components/SearchParam';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParam />
    </div>
  );
};
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
