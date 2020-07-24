import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../../components/Modal';

describe('Modal component', () => {
  it('should see a modal when called', () => {
    const { debug } = render(
      <Modal
        cashback={2.33}
      />
    );

    debug();
  });
})