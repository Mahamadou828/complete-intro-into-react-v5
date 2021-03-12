import { Link, Router } from '@reach/router';
import React, { lazy, Suspense, useState } from 'react';
import { render } from 'react-dom';
import { SearchParam } from './components/SearchParam';
import ThemeContext from './context/theme';
const Details = lazy(() => import('./pages/Details'));

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Suspense fallback={<h1>Loading Route</h1>}>
          <Router>
            <SearchParam path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
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
