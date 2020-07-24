import React, { useCallback } from 'react';

import { useToast } from '../../hooks/ToastContext'; 
import formatPriceToBrazilian from '../../utils/formatPriceToBrazilian';

import addPokemonToCart from '../../utils/addPokemonToCart';

import { 
  Container,
  Image,
  Info, 
  ButtonToBuy,
  AddToCart,
} from './styles';

import pokeball from '../../assets/svg/pokeball.svg';

interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
  installment: string;
  cashback: number;
}

const DetailProduct: React.FC<Props> = ({
  id,
  name,
  image,
  price,
  installment,
  cashback,
}) => {
  const { addToast } = useToast();

  const handleAddToCart = useCallback( async (
    id: number, 
    price: number, 
    name: string,
    image: string
  ): Promise<void> => {
    
    await addPokemonToCart(id, price, name, image);

    addToast({
      title: 'Adicionado',
      description: `Seu ${name} foi adicionado ao carrinho!`
    });
  }, [addToast]);

  return (
    <Container>
      <Image src={image} />

      <Info>
        <h2>{name} </h2>

        <div>
          <strong>R$ {formatPriceToBrazilian(price)} </strong>
          <span>10x de  R${installment} </span>
          <small> 5% de cashback: R${formatPriceToBrazilian(cashback)} </small>
        </div>

        <ButtonToBuy>
          <AddToCart type="button" onClick={() => handleAddToCart(id, price, name, image)}>
            <img src={pokeball} alt="Pokeball"/>
            <span>Comprar</span>
          </AddToCart>
        </ButtonToBuy>
      </Info>
    </Container>
  );
}

export default DetailProduct;