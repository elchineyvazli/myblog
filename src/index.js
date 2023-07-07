import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MessageProvider } from './UseMessage/UseMessage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MessageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MessageProvider>
);


