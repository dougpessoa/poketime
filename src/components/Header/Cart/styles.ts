import styled from 'styled-components';

import { TimesCircle } from '../../../styles/icons';

interface Props {
  src: string;
}

export const Container = styled.div`
  position: absolute;
  top: 70px;
  right: 40px;

  width: 300px;

  background: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 6px;
  
  z-index: 4;

  &::after {
    border: 10px solid transparent;
    border-bottom-color: white;
    content: "";
    right: 20px;
    top: -20px;
    position: absolute;
  }

  @media (min-width: 1485px) {
    right: calc((100% - 1407px) / 2);
  }

  @media (max-width: 898px) {
    right: 10px;
  }

  @media (max-width: 378px) {
    width: 270px;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 200px;
  max-height: 300px;
  padding: 7px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }

  &::-webkit-scrollbar-thumb {
    background: #888; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 20px;

  display: flex;

  & + div{
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
  width: calc(100% - 100px);
  height: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Remove = styled.div`
  width: 30px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RemoveIcon = styled(TimesCircle)`
  color: red;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Empty = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FinishButton = styled.button`
  width: 100%;
  padding: 12px;
  outline: none;
  background: var(--secondary);
  border: none;
  color: white;
`;