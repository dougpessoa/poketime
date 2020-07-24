import React, { useEffect } from 'react';

import { Container, TimesIcon } from './styles';

import pokeball from '../../../assets/svg/pokeball.svg';

import { useToast } from '../../../hooks/ToastContext';

interface ToastProps {
  id: string;
  title: string;
  description: string;
  style: object;
}

const Toast: React.FC<ToastProps> = ({ id, title, description, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, [removeToast, id]);

  return (
    <Container style={style}>
        <img src={pokeball} alt="Pokeball"/>

        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>

        <button onClick={() => removeToast(id)} type="button">
          <TimesIcon />
        </button>
      </Container>
  );
}

export default Toast;