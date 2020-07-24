import styled from 'styled-components';

import { ClassCSSProps } from '.';

interface Props {
  src: string;
}


export const Container = styled.div<ClassCSSProps>`
  width: 200px;
  height: 250px;
  background: white;
  padding: 12px;

  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
  margin: 6px 12px;
  flex-shrink: 0;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 6px;
  }

  @media (max-width: 490px) {
    margin: 6px 5px;
    flex: 1;
  }


  @media (
    max-width: ${(props) => props.isProductInfo ? '555px' : '490px'}
  ) {
    width: 80%;
  }
`;

export const Image = styled.div<Props>`
  width: 100%;
  height: 100px;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
`;

export const Info = styled.div`
  width: 100%;
  height: calc(100% - 100px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 100%;
  margin-top: 7px;

`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: var(--primary);
  }

  small {
    margin-top: 5px;
  }
`;
