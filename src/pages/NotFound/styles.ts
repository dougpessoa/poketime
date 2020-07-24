import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 300px;
  height: calc(100vh - 110px);
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;

  h1 {
    font-size: 30px;
  }

  h5 {
    font-size: 25px;
  }

  h5, a {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  background: var(--secondary);
  border: none;
  outline: 0;
  color: white
`;