import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { Container } from './styles';

import { ToastMessage } from '../../hooks/ToastContext';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages, 
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    }
  );

  return (
    <Container id="toast">
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast
          id={item.id}
          title={item.title}
          description={item.description}
          key={key}
          style={props}
        />
      ))}
      
    </Container>
  );
}

export default ToastContainer;