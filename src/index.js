import { Link, Router } from '@reach/router';
import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { SearchParam } from './components/SearchParam';
import { store } from './redux';
const Details = lazy(() => import('./pages/Details'));

const App = () => {
  return (
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
  );
};
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
