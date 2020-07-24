import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background: rgb(214, 214, 214);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 180px;
    margin-bottom: 20px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    text-align: center;
  }
`;
