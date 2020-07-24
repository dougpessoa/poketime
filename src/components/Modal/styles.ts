import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 6;

  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 500px;
  height: 300px;
  border: 5px solid var(--primary);
  position: relative;

  background: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    text-align: center;
    line-height: 25px;
  }

  small {
    position: absolute;
    bottom: 10px;
  }

  @media (max-width: 549px) {
    width: 91%;
  }
`;