import styled from 'styled-components';

import background from '../../assets/images/cover/home.png';
import backgroundMobile from '../../assets/images/cover/home-mobile.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  div.content {
    width: 100%;
    max-width: 1440px;
  }

  @media (max-width: 768px) {
    padding-top: 115px;
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 500px;

  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 300px;
    background-size: inherit;
    background-image: url(${backgroundMobile});
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 20px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: inherit;
    width: fit-content;
    display: flex;
  justify-content: center;

    @media (max-width: 356px) {
      width: 100%;
    }
  }
  
  @media (max-width: 1383px) {
    height: 550px;
    overflow: hidden;
  }

  @media (max-width: 1159px) {
    height: fit-content;
  }

  @media (max-width: 490px) {
    padding: 20px 5px;
  }
`;
