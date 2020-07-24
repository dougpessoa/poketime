import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';

import Modal from '../../components/Modal';

import { loadStorage, deleteItemFromStorage } from '../../utils/cart';
import formatPriceToBrazilian from '../../utils/formatPriceToBrazilian';

import { 
  Container, 
  Cover,
  Content,
  Header,
  List,
  Item,
  Image,
  Information,
  DeleteButton,
  TimesIcon,
  FinishContainer,
  FinishButton,
  ValueFinal,
  EmptyCart
} from './styles';

import emptyPokeball from '../../assets/images/empty-pokeball.png';

import IPokemonLocalStorage from '../../interfaces/IPokemonLocalStorage';

interface PokemonValues {
  price: number;
}

const Cart: React.FC = () => {

  const [listOfCart, setListOfCart] = useState<IPokemonLocalStorage[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalInstallmentPrice, setTotalInstallmentPrice] = useState(0);
  const [cashback, setCashback] = useState(0);
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);

  useEffect(() => {
    const pokemon = loadStorage();
    calculateTotalValue(pokemon);
    setListOfCart(pokemon);
  }, []);

  function handleDeleteItem(id: string): void {
    deleteItemFromStorage(id, listOfCart);

    const pokemon = loadStorage();
    calculateTotalValue(pokemon);
    setListOfCart(pokemon);
  }

  function calculateTotalValue(pokemon: PokemonValues[]): void {
    let totalValue = 0;

    for (let i = 0; i < pokemon.length; i++) {
      const { price } = pokemon[i];
      
      totalValue += Number(price.toFixed(2));
    }
    const installment = totalValue / 12;
    const valueCashback = totalValue * 0.05;

    setTotalPrice(totalValue);
    setTotalInstallmentPrice(installment);
    setCashback(valueCashback);
  }

  function handleFinishShop(total: number, cashback: number) {
    const date = new Date();
    let arrayPurchased = [];

    const purchased = localStorage.getItem("@Poketime: purchased");

    if(purchased) {
      arrayPurchased = JSON.parse(purchased);
    }

    const shop = {
      id: uuid(),
      total,
      cashback,
      date,
      products: listOfCart
    };

    arrayPurchased.push(shop)

    localStorage.setItem("@Poketime: purchased", JSON.stringify(arrayPurchased));

    localStorage.removeItem('@Poketime: products');

    setModalIsDisplayed(true);
  }

  return (
    <>
    {modalIsDisplayed && <Modal cashback={cashback} /> }

    <Container>
      <Cover isEmpty={listOfCart.length === 0 ? true : false} />

      <Content>
        <Header>
          <h1>Seu carrinho</h1>
        </Header>
        <List>
          {
            listOfCart.length === 0 
              ? <EmptyCart>
                  <img src={emptyPokeball} alt="pokébola vazia"/>
                  <p>
                    Oh não! <br />
                    Você não tem nenhum pokémon no carrinho.
                    <br />
                    Vamos as compras? 
                  </p>
                </EmptyCart>
              
              : listOfCart.map(item => (
                  <Item key={item.id}>
                    <Image src={item.image} />
                    <Information>
                      <h4>{item.name}</h4>
                      <span>R$ {formatPriceToBrazilian(item.price)}</span>
                    </Information>
                    <DeleteButton type="button">
                      <TimesIcon onClick={() => handleDeleteItem(item.uuid)} />
                    </DeleteButton>
                  </Item>
                ))
          }
        </List>
        {
          listOfCart.length !== 0 
          && <ValueFinal>
              <div>Total</div>
              <div className="price">
                <strong>R${formatPriceToBrazilian(totalPrice)}</strong>
                <small>12x de R${formatPriceToBrazilian(totalInstallmentPrice)}</small>
                <small>5% de cashback: R${formatPriceToBrazilian(cashback) }</small>
              </div>
             </ValueFinal>
        } 
        <FinishContainer>
          {
            listOfCart.length !== 0 
            ? <FinishButton onClick={() => handleFinishShop(totalPrice, cashback)}>finalizar compra</FinishButton>
            : <Link to="/"><FinishButton>ir as compras</FinishButton></Link>
          }
        </FinishContainer>
      </Content>
    </Container>
    </>
  );
}

export default Cart;