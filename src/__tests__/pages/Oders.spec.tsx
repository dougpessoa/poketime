import React from 'react';
import { render } from '@testing-library/react';

import Orders from '../../pages/Orders';


jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children
  }
});

jest.spyOn(React, 'useEffect').mockImplementation(f => f());

describe('Order Page', () => {
  it('should be able to see orders', () => {
    const { debug } = render(<Orders />);

    debug();
  });
});