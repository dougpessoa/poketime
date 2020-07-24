import React from 'react';
import { render } from '@testing-library/react';
import Cart from '../../pages/Cart';

const mockedCart = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedCart,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children
  }
});

describe('Cart page', () => {
  it('should be redirect to Orders page', () => {
    render(<Cart />);

    setTimeout(() => {
      expect(mockedCart).toHaveBeenCalledWith('/pedidos');
    }, 5000);
  });
});