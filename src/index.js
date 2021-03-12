import { Link, Router } from '@reach/router';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { SearchParam } from './components/SearchParam';
import ThemeContext from './context/theme';
import Details from './pages/Details';

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>

        <Router>
          <SearchParam path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
