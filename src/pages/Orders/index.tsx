import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import formatPriceToBrazilian from '../../utils/formatPriceToBrazilian';

import { 
  Container, 
  Content,
  Items,
  Item,
  Head,
  Product,
  Image,
  Description,
  Empty,
  Button
} from './styles';

interface ShopStorage {
  id: string;
  total: number;
  cashback: number;
  date: string;
  products: [{
    uuid: string;
    id: number;
    image: string;
    name: string;
    price: number;
  }]
}

const Orders: React.FC = () => {
  const [purchased, setPurchased] = useState<ShopStorage[]>([]);

  useEffect(() => {
    const storage = localStorage.getItem("@Poketime: purchased");

    let ArrayPurchased = [];

    if(storage) {
      ArrayPurchased = JSON.parse(storage);
    }

    ArrayPurchased.reverse();

    setPurchased(ArrayPurchased);
  }, []);

  const formatDate = useCallback((date: string): String => {
    const monthsBR = [
      "Jan", 
      "Fev", 
      "Mar", 
      "Abr", 
      "Mai",
      "Jun",
      "Jul", 
      "Ago", 
      "Set", 
      "Out", 
      "Nov", 
      "Dez"
    ];

    const dateOfOrder = new Date(date);

    let day = dateOfOrder.getDate();
    day = Number(day < 10 ? `0${day}` : day);

    const month = monthsBR[dateOfOrder.getMonth()];
    
    return `${day}/${month}`;
  }, []);

  return (
    <Container>
      <Content>
       { 
        purchased.length === 0 
        ? <Empty>
            <h1>Puxa!</h1>
            <h5>Você ainda não fez novos pedidos, vamos as compras?</h5>
            <Link to="/">
              <Button>
                ir as compras
              </Button>
            </Link>
          </Empty>
        
        : purchased.map((item) => (
            <Items key={item.id}>
              <Item>
                <Head>
                  <p className="green-text">
                    oooba você fez esse pedido
                  </p>
                  <p>
                    pedido feito em <span className="green-text">{formatDate(item.date)} </span>
                  </p>
                </Head>
                {
                  item.products.map((product) => (
                    <Product key={product.uuid}>
                      <Image src={product.image} />
                      <Description>
                        <h5>{product.name} </h5>
                        <span>{formatPriceToBrazilian(product.price)} </span>
                      </Description>
                    </Product>
                  ))
                }
              </Item>
              <Item className="small">
                <div>Total</div>
                <div className="prices">
                  <strong>{formatPriceToBrazilian(item.total)} </strong>
                  <small>5% de cashback: {formatPriceToBrazilian(item.cashback)} </small>
                </div>
              </Item>
            </Items>
          ))
        }
      </Content>
    </Container>
  );
}

export default Orders;