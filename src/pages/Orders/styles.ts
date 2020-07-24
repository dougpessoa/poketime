import styled from 'styled-components';

interface Props {
  src: string;
}

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 700px;
  min-height: 500px;
  margin-top: 100px;

  @media (max-width: 898px) {
    margin-top: 50px;
  }

  @media (max-width: 737px) {
    width: 95%;
  }
`;

export const Items = styled.div`
  width: 100%;
  min-height: 150px;
  padding: 12px;
  border: 1px solid gray;

  & + div {
    margin: 20px 0;
  }
`;

export const Item = styled.div`
  width: 100%;
  min-height: 150px;

  &.small {
    min-height: 80px;
    padding: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.7);

    display: flex;
    justify-content: space-between;
    align-items: center;

    div.prices{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

export const Head = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid gray;
  padding: 6px 10px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;

  p, span {
    font-weight: bold;
  }

  p.green-text, span.green-text {
    color: var(--primary);
  }

  @media (max-width: 453px) {
    height: 60px;
    justify-content: flex-start;
    flex-direction: column;
    
    span {
      margin-top: 5px;
    }
  }
`;

export const Product = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;

  & + div {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
`;

export const Image = styled.div<Props>`
  width: 70px;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Description = styled.div`
  width: calc(100% - 80px);
  height: 100%;
  padding: 12px;

  line-height: 20px;
`;

export const Others = styled.div`
  display: block;
`;

export const Empty = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  line-height: 50px;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  background: var(--secondary);

  outline: 0;
  border: none;
  color: white;
`;
