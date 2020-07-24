import React from 'react';
import { render } from '@testing-library/react';
import DetailProduct from '../../components/DetailProduct';

describe('Details Product Component', () => {
  it('should see a detail of product', () => {
    const { debug } = render(
      <DetailProduct
        id={1}
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
        name="charmander"
        price={53.22}
        cashback={2.11}
        installment="11.11" 
      />
    );

    debug();
  });
})