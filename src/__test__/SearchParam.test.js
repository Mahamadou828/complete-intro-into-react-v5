import { ANIMALS } from '@frontendmasters/pet';
import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import pet, { _breeds, _dogs } from '../../__mock__/frontendmastes/pet';
import { SearchParam } from '../components/SearchParam';

afterEach(cleanup);

describe('SearchParams', () => {
  test('should render without error', () => {
    const { getByTestId, container, getByText } = render(<SearchParam />);
    const animalDropdown = getByTestId('use-dropdown-animal');
    expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);
    expect(pet.breeds).toHaveBeenCalled();
    const breedDropdown = getByTestId('use-dropdown-breed');
    expect(breedDropdown.children.length).toEqual(_breeds.length + 1);

    const searchResult = getByText('search-results');
    expect(searchResult.textContent).toEqual('No Pets Found');

    fireEvent(getByText('Submit'), new MouseEvent('click'));
    expect(searchResult.children.length).toEqual(_dogs.length);

    expect(container.firstChild).toMatchInlineSnapshot();
  });
});
