import styled from 'styled-components';

interface Props {
  src: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 558px) {
    flex-direction: column;
  }
`;

export const Image = styled.div<Props>`
  width: 200px;
  height: 200px;
  border-right: 1px solid rgba(0,0,0,0.12);
  border-bottom: 1px solid rgba(0,0,0,0.12);

  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 558px) {
    width: 100%;
    border-right: none;
  }
`;

export const Info = styled.div`
  width: calc(100% - 200px);
  height: 200px;
  padding: 20px;
  border-bottom: 1px solid rgba(0,0,0,0.12);

  h2 {
    font-size: 26px;
    font-weight: 800;
  }

  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    line-height: 25px;

    strong {
      font-size: 18px;
    }
  }

  @media (max-width: 558px) {
    width: 100%;
  }
`;

export const ButtonToBuy = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

export const AddToCart = styled.button`
  width: 200px;
  height: 40px;
  background: var(--primary);

  border: none;

  img {
    max-width: 15px;
  }

  span {
    margin-left: 7px;
    color: white;
  }

  @media (max-width: 558px) {
    width: 100%;
  }
`;