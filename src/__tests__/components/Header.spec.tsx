import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Header from '../../components/Header';


const mockedHeader = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHeader,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children
  }
});

describe('Header Component', () => {
  it('Should be search for a pokemon', () => {
    const { getByTestId } = render(<Header />);

    const searchField = getByTestId('search');
    const searchButton = getByTestId('submit');

    fireEvent.change(searchField, { target: { value: 'charmander' }});

    fireEvent.click(searchButton);

    expect(mockedHeader).toHaveBeenCalledWith('/pokemon/charmander');
  });

  it('Should be open a element that contains cart', async () => {
    const { getByTestId } = render(<Header />);

    const iconCart = getByTestId('icon-cart');

    fireEvent.click(iconCart);

    const infoCartElement = getByTestId('info-cart');

    await waitFor(() => {
      expect(infoCartElement).toBeInTheDocument();
    })
  });
});