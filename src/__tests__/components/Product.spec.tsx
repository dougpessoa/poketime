import React from 'react';
import { render } from '@testing-library/react';
import Product from '../../components/Product';

describe('Product Component', () => {
  it('should see a product', () => {
    const { debug } = render(
      <Product
        id={1}
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
        installmentAmount="2.12"
        name="charmander"
        price={53.22}
      />
    );

    debug();
  });
})