import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Routes from './routes';

import { ToastProvider } from './hooks/ToastContext';

function App() {
  return (
    <>
    <ToastProvider>
      <Routes />
    </ToastProvider>
    <GlobalStyle />
    </>
  );
}

export default App;
