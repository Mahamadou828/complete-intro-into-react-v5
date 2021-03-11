import { Link, Router } from '@reach/router';
import React from 'react';
import { render } from 'react-dom';
import { SearchParam } from './components/SearchParam';
import Details from './pages/Details';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me</Link>
      </header>

      <Router>
        <SearchParam path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
