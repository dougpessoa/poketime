import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
  padding: 70px 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 898px) {
    min-height: 550px;
  }

  @media (max-width: 558px) {
    height: fit-content;
    padding: 20px;
  }
`;

export const Content = styled.div`
  width: 720px;
  border: 1px solid rgba(0,0,0,0.12);
  margin-top: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 898px) {
    margin-top: 0;
    width: 95%;
  }

  @media (max-width: 558px) {
    height: fit-content;
  }
`;

export const OtherProducts = styled.div`
  width: 100%;
  display: flex;

  display: flex;
  flex-direction: column;

  text-align: center;

  h3 {
    margin: 20px 0;
  }

  div.others {
    display: flex;

    a {
      text-decoration: none;
      color: inherit;
      width: fit-content;
      display: flex;
      justify-content: center;

      @media (max-width: 555px) {
        width: 100%;
      }
    }

    @media (max-width: 898px) {
      justify-content: space-around;
    }

    @media (max-width: 719px) {
      flex-wrap: wrap;
    }
  }
`;

export const UnknownPokemon = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 30px;
  }

  h5 {
    font-size: 25px;
  }
`;

export const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
`;