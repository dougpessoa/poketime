import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
   width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 7px solid rgba(0, 0, 0, 0.12);
  border-top: 7px solid var(--primary);

  animation: ${rotate} .7s linear infinite;
`;
