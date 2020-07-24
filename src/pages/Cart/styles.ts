import styled from 'styled-components';

import background from '../../assets/images/cover/cart-poketime.jpg';
import backgroundWithPokemon from '../../assets/images/cover/cart-with-pokemon-poketime.jpg';
import backgroundMobile from '../../assets/images/cover/cart-mobile-poketime.jpg';
import backgroundMobileWithPokemon from '../../assets/images/cover/cart-with-pokemon-mobile-poketime.jpg';

import { TimesCircle } from '../../styles/icons';

interface Props {
  src?: string;
  isEmpty?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

`;

export const Cover = styled.div<Props>`
  width: 100%;
  height: 500px;
  max-width: 1440px;

  background-image: ${
    (props) => props.isEmpty 
      ? `url(${background})`
      : `url(${backgroundWithPokemon})`
  };
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 300px;
    background-size: inherit;
    background-image: ${
      (props) => props.isEmpty 
        ? `url(${backgroundMobile})`
        : `url(${backgroundMobileWithPokemon})`
    };
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;

  color: var(--secondary);
  text-align: center;
  font-weight: bold;
`;

export const List = styled.div`
  width: 700px;
  height: fit-content;
  background: rgba(0, 0, 0, 0.12);

  padding: 20px;


  @media (max-width: 733px) {
    width: 95%;

    padding: 10px;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  padding: 10px 0px;

  & + div {
    border-top: 1px solid rgba(0,0,0,0.12);
  }
`;

export const Image = styled.div<Props>`
  width: 70px;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 30px;

  @media (max-width: 443px) {
    margin-left: 10px;
  }
`;

export const Information = styled.div`
  margin-left: 20px;

  width: calc(100% - 120px);

  @media (max-width: 443px) {
    margin-left: 5px;
  }
`;

export const DeleteButton = styled.button`
  width: 50px;
  height: 100%;

  outline: none;
  border:none;
  background: transparent;
`;

export const TimesIcon = styled(TimesCircle)`
  width: 24px;
  height: 24px;
  color: var(--secondary);
`;

export const ValueFinal = styled.div`
  width: 700px;
  height: 100px;
  background: rgba(0, 0, 0, 0.12);
  border-top: 1px solid rgba(0, 0, 0, 0.5);

  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-size: 23px;
    }

    small {
      font-size: 15px;
    }
  }

  @media (max-width: 733px) {
    width: 95%;
  }
`;

export const FinishContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: center;
`;

export const FinishButton = styled.button`
  width: 300px;
  padding: 20px;

  background: var(--primary);
  color: white;
  border: none;
  outline: 0;
`;

export const EmptyCart = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 127.7px;
    height: 165.7px;
  }

  p {
    color: var(--secondary);
    font-size: 15px;
    font-weight: 600;
  }
`;