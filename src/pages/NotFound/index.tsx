import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>puxa!</h1>
      <h5>não encontramos pelo o que você procurava!</h5>

      <Link to="/">
        <Button>
          ir para o início
        </Button>
      </Link>
    </Container>
  );
}

export default NotFound;