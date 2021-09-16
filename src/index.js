import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.js';


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-d6vsji4s.us.auth0.com"
      clientId="gE6labl3VlSEgTxdzAxAOBX6rkgZHtmU"
      redirectUri={window.location.origin}
     >
        <App />
     </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);