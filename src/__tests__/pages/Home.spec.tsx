import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Home from '../../pages/Home';

jest.mock('../../utils/loadPokemon', () => {
  return {
    loadPokemon: () => ({
      loadPokemon: jest.fn()
    })
  }
});

describe('Home Page', () => {
  it('should be able to see home page', async () => {
    const { debug } = render(<Home />);
  
    await waitFor(() => {
      debug();
    })
  });
});