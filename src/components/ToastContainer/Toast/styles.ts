import styled from 'styled-components';

import { animated } from 'react-spring';

import { TimesCircle } from '../../../styles/icons';

export const Container = styled(animated.div)`
  width: 360px;
  position: relative;
  z-index: 6;

  padding: 16px 30px 16px 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  background: #fcbf9f;
  color: var(--secondary);

  & + div {
    margin-top: 10px;
  }

  img {
    max-width: 17px;
    margin-right: 7px;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 15px;
    opacity: 0.6;
    background: transparent;
    border:none;
  }

  @media (max-width: 428px) {
    width: 90vw;
  }
`;

export const TimesIcon = styled(TimesCircle)`
  width: 15px;
  height: 15px;
  color: #3172b7;
`;
