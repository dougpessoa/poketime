import React, { useCallback } from 'react';

import IPokemonProps from '../../interfaces/IPokemonProps';
import formatPriceToBrazilian from '../../utils/formatPriceToBrazilian';

import { 
  Container,
  Image,
  Info,
  Title,
  Price,

} from './styles';

export interface ClassCSSProps {
  isProductInfo?: boolean;
}

type Props = IPokemonProps & ClassCSSProps;

const Product: React.FC<Props> = ({ 
  id,
  name,
  image,
  price,
  installmentAmount,
  isProductInfo
 }) => {

  const calculateCashback = useCallback((price: number): String => {
    const cashback = price * 0.05;

    return formatPriceToBrazilian(cashback);
  }, []);

  return (
    <Container isProductInfo={isProductInfo}>
        <Image src={image} />
        <Info>
          <Title>
            <h3>
              {name}
            </h3>
          </Title>
          <Price>
            <strong>
              R${formatPriceToBrazilian(price)}
            </strong>
            <span>
              10x de R${installmentAmount}
            </span>
            <small>
              5% de cashback R${calculateCashback(price)}
            </small>
          </Price>
        </Info>
    </Container>
  );
}

export default Product;