import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MessageProvider } from './ContextFolder/UseMessageContext';
import "./Media/Media.scss"
import { ScreenProvider } from './ContextFolder/UseScreenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ScreenProvider>
    <MessageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MessageProvider>
  </ScreenProvider>
);


