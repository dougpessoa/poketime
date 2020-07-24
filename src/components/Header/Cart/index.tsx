import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { loadStorage, deleteItemFromStorage } from '../../../utils/cart';
import formatPriceToBrazilian from '../../../utils/formatPriceToBrazilian';

import { 
  Container,
  Content,
  Item,
  Image,
  Description,
  Remove,
  RemoveIcon,
  Empty,
  FinishButton
} from './styles';

import IPokemonLocalStorage from '../../../interfaces/IPokemonLocalStorage';

interface ResponseToHeader {
  closeCart(): void;
}

const Cart: React.FC<ResponseToHeader> = ({ closeCart }) => {
  
  const [listOfCart, setListOfCart] = useState<IPokemonLocalStorage[]>([]);

  useEffect(() => {
    const pokemon = loadStorage();

    setListOfCart(pokemon);
  }, []);

  function handleDeleteItem(id: string) {
    deleteItemFromStorage(id, listOfCart);

    const pokemon = loadStorage();

    setListOfCart(pokemon);
  }

  let timer: ReturnType<typeof setTimeout>;

  function handleMouseEnter() {
    clearInterval(timer);
  }

  function handleMouseLeave() {
    clearTimeout(timer);

    timer = setTimeout(() => {
      closeCart();
    }, 300);
  }

  return ( 
    <Container 
      onMouseLeave={handleMouseLeave} 
      onMouseEnter={handleMouseEnter}
      data-testid="info-cart"
    >
      <Content>
        {
          listOfCart.length === 0 
          ? <Empty>
              <h3>Seu carrinho está vazio!</h3>
            </Empty>
          
          : listOfCart.map(item => (
            <Item key={item.id}>
              <Image src={item.image} />

              <Description>
                <h3>
                  {item.name}
                </h3>

                <span>
                  R${formatPriceToBrazilian(item.price)}
                </span>
              </Description>
              <Remove>
                <RemoveIcon onClick={() => handleDeleteItem(item.uuid)} />
              </Remove>
            </Item>
          ))
        }
      </Content>
      { listOfCart.length !== 0 &&
        <Link onClick={closeCart} to="/carrinho">
          <FinishButton>
            ver carrinho
          </FinishButton>
        </Link>
      }
    </Container>
  );
}

export default Cart;