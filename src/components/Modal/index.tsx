import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import formatPriceToBrazilian from '../../utils/formatPriceToBrazilian';

import { Container, Content } from './styles';

interface Props {
  cashback: number;
}

const Modal: React.FC<Props> = ({ cashback }) => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/pedidos');
    }, 5000);
  }, [history]);

  return (
    <Container>
      <Content>
        <h1>Obrigado!</h1>

        <p>
          Agradecemos a compra! <br />
          você ganhou de cashback: <br />
          <strong>{formatPriceToBrazilian(cashback)}</strong>
        </p>

        <small>Redirecionando para página de pedidos...</small>
      </Content>
    </Container>
  );
}

export default Modal;