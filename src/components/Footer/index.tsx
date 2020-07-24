import React from 'react';

import { Container } from './styles';

import logo from '../../assets/images/logo-poketime.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Logo pokémericanas"/>
      <p>
      B2W - Companhia Digital / CNPJ: 00.776.574/0006-60 / Inscrição Estadual: 85.687.08-5 / Endereço Rua Sacadura Cabral, 102 - Pallet, KA - 20081-902
      </p>
    </Container>
  );
}

export default Footer;