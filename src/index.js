import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <GlobalStyle />
    <Router />
  </GoogleOAuthProvider>
);
